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

@connect(
  state => ({ mapCenter: state.app.mapCenter }),
  dispatch => bindActionCreators({}, dispatch)
)
class ResponsiveDialog extends React.Component {
  static propTypes = {
    fullScreen: PropTypes.bool.isRequired,
    history: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      cleanup: new Cleanup(),
      open: true
    };
  }

  getStepContent = (step) => {
    switch (step) {
      case 0:
        return <LocationSelection />;
      case 1:
        return 'Step 2: Tools Required';
      case 2:
        return 'Step 3: Summary';
      default:
        return 'Unknown step';
    }
  }

  setLocation = (cleanup) => {
    this.setState({cleanup: cleanup});
  }

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
      activeStep: activeStep + 1
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1
    });
  };

  steps = ['Location', 'Tools', 'Confirmation']

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
          <Stepper activeStep={ activeStep } alternativeLabel>
            {this.steps.map(label => {
              return (
                <Step key={ label }>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <DialogContent>
            {this.state.activeStep === this.steps.length ? (
              <div>
                <Typography >
                  All steps completed - you&quot;re finished
                </Typography>
                <Button onClick={ this.handleReset }>Reset</Button>
              </div>
          ) : (
            <div>
              { this.getStepContent(activeStep) }
              <DialogActions>
                <Button
                  disabled={ activeStep === 0 }
                  onClick={ this.handleBack }
                >
                  Back
                </Button>
                <Button variant='raised' color='secondary' onClick={ this.handleNext }>
                  {activeStep === this.steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </DialogActions>
            </div>
          )}
          </DialogContent>
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

export default withRouter(withMobileDialog()(ResponsiveDialog));
