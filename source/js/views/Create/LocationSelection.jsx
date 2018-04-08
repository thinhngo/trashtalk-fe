
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import GoogleMaps from '@google/maps';

const styles = {
  input: {
    padding: '0.75rem'
  }
};

/**
 * Template for creating connected components
 */
class LocationSelection extends Component {
  static propTypes = {
  }

  static defaultProps = {
  }

  constructor(props) {
    super(props);

    this.state = {
      autocomplete: null,
      geocoder: null,
      id: Date.now()
    };
  }

  componentDidMount() {

    const googleMapsClient = GoogleMaps.createClient({
      clientId: 'Add your client ID here',
      clientSecret: 'Add your client secret here',
    });

    // const autocomplete = new googleMapsClient.places.Autocomplete(
    //     (document.getElementById(this.state.id))/*,
    //     {types: ['(cities)']}*/
    //   );

    // autocomplete.addListener('place_changed', () => {
    //   const place = autocomplete.getPlace();
    //   console.debug('place: $o', place);
    // });
  }

  render() {
    return (
      <Card>
        <CardMedia
          image='https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg'
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
          </Typography>
          <span>
            <input
              id={this.state.id}
              type='text'
              placeholder='Enter a location'
              style={styles.input}
            />
          </span>
        </CardContent>
      </Card>
    );
  }
}

// container part
const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationSelection);
