import LibraryShowcase from "@/components/librariesShowcase";
import RegistrationForm from "@/components/registration";
import Statistics from "@/components/statistics";
import ComponentWithSwitchButton from "@/components/yonalishlarWithSwitchButton";
import YoriqnomaPart from "@/components/yoriqnomaPart";

export default function YonalishlarPage() {

  return (
    <>
      <LibraryShowcase/>
      <YoriqnomaPart/>
      <ComponentWithSwitchButton/>
      <Statistics/>
      <RegistrationForm/>
    </>
  )
}

