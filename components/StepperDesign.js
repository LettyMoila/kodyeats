import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import Stepper from "react-native-stepper-ui";

function UserDetails() {
    return <h2>User details</h2>;
  }
  
  function Payment() {
    return <h2>Payment information</h2>;
  }
  
  function Confirmation() {
    return <h2>Booking is confirmed</h2>;
  }
 
export default function StepperDesign() {
    const [ activeStep, setActiveStep ] = useState(0);

    const steps = [
        { title: 'User details', onClick: () => setActiveStep(0) },
        { title: 'Payment', onClick: () => setActiveStep(1) },
        { title: 'Booking confirmation', onClick: () => setActiveStep(2) },
      ];
      function getSectionComponent() {
        switch(activeStep) {
          case 0: return <UserDetails/>;
          case 1: return <Payment/>;
          case 2: return <Confirmation/>;
          default: return null;
        }
      }

    return(
        <View>
           <Stepper
           steps={steps}
           activeStep={activeStep}/>
           <View style={styles.buttCont}>
                        
                        { (activeStep !== 0 && activeStep !== steps.length - 1)
                            && <Button style={styles.butt} onPress={ () => setActiveStep(activeStep - 1) }>Previous</Button>
                        }
                        { activeStep !== steps.length - 1
                        && <Button style={styles.butt} onPress={ () => setActiveStep(activeStep + 1) }>Next step</Button>
                        }
                    </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    butt: {
        height: 10,
        width: 40,
        borderRadius: 15
    },
    buttCont:{
      padding: 5
    }
})