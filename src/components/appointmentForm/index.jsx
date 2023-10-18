import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const AppointmentForm = () => {
  const [accept, setAccept] = useState(false);
  const ContactSchema = yup.object().shape({
    name: yup.string().required("Please input your name"),
    email: yup.string().email().required("Please input your email"),
    phoneNumber: yup.string().required("Please input your phone number"),
    service: yup.string().required("Please select your service"),
    date: yup.string().required("Please choose date"),
    time: yup.string().required("Please choose time slot"),
    message: yup.string().required("Please write your message"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("service", data.service);
    formData.append("date", data.date);
    formData.append("time", data.time);
    formData.append("message", data.message);
    formData.append("_captcha", data._captcha);

    const res = await axios.post(
      "https://formsubmit.co/physio4u23@gmail.com",
      formData
    );
    console.log(res);
    reset();
  };

  return (
    <div className="container ptb-100">
      <div className="row gx-5">
        <div className="col-xl-10 offset-xl-1">
          <Form id="appointment-form" onSubmit={handleSubmit(onSubmit)}>
            <h5 className="mb-30">Appointment Form</h5>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <div className="help-block with-errors">
                      {errors.name.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    {...register("email")}
                  />
                  {errors.email && (
                    <div className="help-block with-errors">
                      {errors.email.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    {...register("phoneNumber")}
                  />
                  {errors.phoneNumber && (
                    <div className="help-block with-errors">
                      {errors.phoneNumber.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <select
                    name="service_name"
                    id="service_name"
                    {...register("service")}
                  >
                    <option value="Service">Service</option>
                    <option value="Therapy">Therapy</option>
                    <option value="Counseling">Counseling</option>
                  </select>
                  {errors.service && (
                    <div className="help-block with-errors">
                      {errors.service.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input type="date" {...register("date")} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <select
                    name="service_time"
                    id="service_time"
                    {...register("time")}
                  >
                    <option value="0">Time</option>
                    <option value="2_4">2:00PM - 4:00PM</option>
                    <option value="6_8">6:00PM - 8:00PM</option>
                  </select>
                  {errors.time && (
                    <div className="help-block with-errors">
                      {errors.time.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Write Message"
                    {...register("message")}
                  ></textarea>
                  {errors.message && (
                    <div className="help-block with-errors">
                      {errors.message.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <div className="form-check checkbox">
                    <input
                      name="gridCheck"
                      value={accept}
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                      onChange={()=>setAccept(!accept)}
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      This form is for demo purposes only. No data will be
                      stored. I agree to the
                      <a className="link-one" href="terms-conditions.html">
                        terms &amp; conditions
                      </a>
                      and
                      <a className="link-one" href="privacy-policy.html">
                        privacy policy
                      </a>
                    </label>
                  </div>
                  <input
                    type="hidden"
                    value="false"
                    {...register("_captcha")}
                  />
                </div>
              </div>
              <div className="col-12">
                <Button type="submit" className="btn-one d-block w-100" disabled={!accept}>
                  Submit
                </Button>
                <div id="msgSubmit" className="h3 text-center hidden"></div>
                <div className="clearfix"></div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
