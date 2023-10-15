import AppointmentForm from "../components/appointmentForm";
import Breadcrumb from "../components/breadcrumb";
import Layout from "../components/layout/layout";

const Appointment = () => {
  return (
    <Layout>
      <Breadcrumb />
      <AppointmentForm />
    </Layout>
  );
};

export default Appointment;
