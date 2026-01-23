<script>
  import ProgressStepper from '$lib/components/molecules/ProgressStepper.svelte';
  import Formulier from '$lib/components/organisms/Formulier.svelte'; 

  const currentStep = 1; 
</script>

<ProgressStepper {currentStep} />

<Formulier /> 


