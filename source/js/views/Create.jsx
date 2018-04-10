import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog,
} from 'material-ui/Dialog';
import { routeCodes } from '../constants/routes';

import LocationSelection from './Create/LocationSelection';

import Cleanup from '../models/Cleanup';

const styles = {
  stepStyle: {
    width: '100vw',
    maxWidth: '100%',
  },
};

const LOCATION_SELECTION = 0;
const DATE_SELECTION = 1;
const TOOL_SELECTION = 2;
const SUMMARY = 3;
@connect(
  state => ({ mapCenter: state.app.mapCenter }),
  dispatch => bindActionCreators({}, dispatch)
)
class Create extends React.Component {
  static propTypes = {
    fullScreen: PropTypes.bool.isRequired,
    history: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      cleanup: new Cleanup(),
      open: true,
    };
  }

  setCleanup = cleanup => this.setState({ cleanup })

  handleClose = () => {
    // The fadeout transition takes a little while, so pause temporarily to
    // allow animation to finish before actual browser history push
    this.setState(
      { open: false },
      () => setTimeout(() => this.props.history.push(routeCodes.HOME), 225)
    );
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1,
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  steps = ['Location', 'Date and Time', 'Tools', 'Summary']

  renderNextButton = () => {
    const { activeStep, cleanup } = this.state;

    let disabled = false;
    switch (activeStep) {
      case LOCATION_SELECTION:
        if (cleanup.location === null) {
          disabled = true;
        }
        break;
      case DATE_SELECTION:
        break;
      case TOOL_SELECTION:
        break;
      case SUMMARY:
        disabled = true;
        break;
      default:
        disabled = false;
    }
    return (
      <Button
        disabled={ disabled }
        color='secondary'
        onClick={ this.handleNext }
        variant='raised'
      >
        {activeStep === this.steps.length - 1 ? 'Finish' : 'Next'}
      </Button>
    );
  }

  renderStep = () => {
    const { activeStep, cleanup } = this.state;

    const commonProps = {
      cleanup,
      setCleanup: this.setCleanup,
    };

    switch (activeStep) {
      case LOCATION_SELECTION:
        return <LocationSelection { ...commonProps } />;
      case DATE_SELECTION:
        return 'Step 2: Select date';
      case TOOL_SELECTION:
        return 'Step 3: Select tools';
      case SUMMARY:
        return 'Step 4: Summary';
      default:
        return 'Unknown step';
    }
  }

  render() {
    const { fullScreen } = this.props;
    const { activeStep } = this.state;

    return (
      <Dialog
        fullScreen={ fullScreen }
        open={ this.state.open }
        onClose={ this.handleClose }
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle>Organize a New Cleanup</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Organize a new cleanup!
          </DialogContentText>
          <Stepper
            activeStep={ activeStep }
            alternativeLabel
          >
            {this.steps.map(label => {
              return (
                <Step key={ label }>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {this.state.activeStep === this.steps.length ? (
            <div>
              <Typography >
                All steps completed - you&quot;re finished
              </Typography>
              <Button onClick={ this.handleReset }>Reset</Button>
            </div>
          ) : (
            <div style={ styles.stepStyle } >
              {this.renderStep()}
              <DialogActions>
                <Button
                  disabled={ activeStep === 0 }
                  onClick={ this.handleBack }
                >
                  Back
                </Button>
                {this.renderNextButton()}
              </DialogActions>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={ this.handleClose } color='primary'>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withRouter(withMobileDialog()(Create));
