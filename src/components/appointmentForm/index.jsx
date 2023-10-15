// import React from "react";

const AppointmentForm = () => {
  return (
    <div className="container ptb-100">
      <div className="row gx-5">
        <div className="col-xl-10 offset-xl-1">
          <form action="#" id="appointment-form">
            <h5 className="mb-30">Appointment Form</h5>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                    data-error="Please enter your name"
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    required
                    data-error="Please enter your email"
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    required
                    data-error="Please enter your phone"
                  />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <select name="service_name" id="service_name">
                    <option value="0">Service</option>
                    <option value="1">Therapy</option>
                    <option value="2">Counseling</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input type="date" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <select name="service_time" id="service_time">
                    <option value="0">Time</option>
                    <option value="1">9:00AM - 10:00AM</option>
                    <option value="2">10:00AM - 11:00AM</option>
                    <option value="3">11:00AM - 12:00AM</option>
                  </select>
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
                    required
                    data-error="Please enter your message"
                  ></textarea>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <div className="form-check checkbox">
                    <input
                      name="gridCheck"
                      value="I agree to the terms and privacy policy."
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                      required
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
                    <div className="help-block with-errors gridCheck-error"></div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn-one d-block w-100">
                  Submit
                </button>
                <div id="msgSubmit" className="h3 text-center hidden"></div>
                <div className="clearfix"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
