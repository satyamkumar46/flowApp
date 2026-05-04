import React from 'react';
import { SafeAreaView } from 'react-native';
import { FlowProvider, useFlow } from './src/context/FlowContext';
import { FlowScreen } from './src/screens/FlowScreen';
import { SummaryScreen } from './src/screens/SummaryScreen';
import { globalStyles } from './src/theme';

const MainFlow = () => {
  const { currentStep, isSuccess } = useFlow();

  return (
    <SafeAreaView style={globalStyles.container}>
      {currentStep === 5 || isSuccess ? <SummaryScreen /> : <FlowScreen />}
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <FlowProvider>
      <MainFlow />
    </FlowProvider>
  );
}