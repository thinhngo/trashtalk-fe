
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
    height: 250,
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
});

@connect(
  state => ({
    mapCenter: state.app.get('mapCenter'),
    mapReference: state.app.get('mapReference')
  }),
)
class LocationSelection extends Component {
  state = {
    value: '',
    suggestions: [],
  }

  handleSuggestionsFetchRequested = ({ value }) => {
    const service = new google.maps.places.PlacesService(map);
    // https://developers.google.com/maps/documentation/javascript/places#place_searches
    const request = {
      location: mapCenter.getLatLngObj(),
      radius: 20000,
      keyword: newValue
    };

    const callback = (results, status) => {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        results.forEach(result => {
          console.debug('result: %o', result);
        })
    }

    service.nearbySearch(request, callback);

    this.setState({
      suggestions: [],
    });
  }

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  }

  handleChange = (event, { newValue }) => {
    const { mapCenter, mapReference } = this.props;
    this.setState({
      value: newValue,
    });
  }

  renderInput = (inputProps) => {
    const { classes, ref, ...other } = inputProps;

    return (
      <TextField
        fullWidth
        InputProps={{
          inputRef: ref,
          classes: {
            input: classes.input,
          },
          ...other,
        }}
      />
    );
  }

  renderSuggestion = (suggestion, { query, isHighlighted }) => {
    const matches = match(suggestion.label, query);
    const parts = parse(suggestion.label, matches);

    return (
      <MenuItem selected={isHighlighted} component="div">
        <div>
          {parts.map((part, index) => {
            return part.highlight ? (
              <span key={String(index)} style={{ fontWeight: 300 }}>
                {part.text}
              </span>
            ) : (
                <strong key={String(index)} style={{ fontWeight: 500 }}>
                  {part.text}
                </strong>
              );
          })}
        </div>
      </MenuItem>
    )
  }

  renderSuggestionsContainer = (options) => {
    const { containerProps, children } = options;

    return (
      <Paper { ...containerProps } square>
        {children}
      </Paper>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderInputComponent={this.renderInput}
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        renderSuggestionsContainer={this.renderSuggestionsContainer}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={{
          classes,
          placeholder: 'Search a country (start with a)',
          value: this.state.value,
          onChange: this.handleChange,
        }}
      />
    );
  }
}

export default withStyles(styles)(LocationSelection);
