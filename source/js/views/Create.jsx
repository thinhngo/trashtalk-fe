import React from 'react';
import PropTypes from 'prop-types';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog
} from 'material-ui/Dialog';

class ResponsiveDialog extends React.Component {
  state = {
    activeStep: 0,
    open: true
  };

  getStepContent = (step) => {
    switch (step) {
      case 0:
        return 'Step 1: Cleanup Location';
      case 1:
        return 'Step 2: Tools Required';
      case 2:
        return 'Step 3: Summary';
      default:
        return 'Unknown step';
    }
  }

  handleClose = () => {
    this.setState({ open: false });
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

  steps = ['Where is the location?', 'What tools are required?', 'Summary']

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
          <div>
            {this.state.activeStep === this.steps.length ? (
              <div>
                <Typography >
                  All steps completed - you&quot;re finished
                </Typography>
                <Button onClick={ this.handleReset }>Reset</Button>
              </div>
          ) : (
            <div>
              <Typography>{ this.getStepContent(activeStep) }</Typography>
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
          </div>
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

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired
};

export default withMobileDialog()(ResponsiveDialog);
