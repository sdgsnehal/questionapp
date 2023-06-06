import "./LoginForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import clickIpoLogo from "../assets/clickipo-logo-tagline.f2f800ef.png"
import ipoPlatformMockups from "../assets/ipo-platform-mockups.9255731c.png"
function LoginForm() {
  return (
    <div class="container">
    <div className="row">
    <div class="col-md-7 col-lg-8">
      <div><img src={clickIpoLogo} alt="" className="img-fluid "/></div>
      <div>
        <img src={ipoPlatformMockups} alt="" className="img-fluid"/>
      </div>
    </div>
    <div class="col-md-5 col-lg-4">
    <div className="wrapper  d-flex align-items-center justify-content-center w-100">
      <div className="login rounded">
        <h2 className="mb-3">Login Form</h2>
        <form className="needs-validation">
          <div className="form-group was-validated mb-2">
            {/* <label htmlFor="email" className="form-label">Email Address</label> */}
            <input type="email" className="form-control" required placeholder="Email"/>
            <div className="invalid-feedback">
                Please Enter Your Email
            </div>
          </div>
          <div className="form-group was-validated mb-2">
            {/* <label htmlFor="password" className="form-label">Password</label> */}
            <input type="password"  className="form-control" required/>
            <div className="invalid-feedback">
                Please Enter Your Password
            </div>
          </div>
          <div className="form-group form-check mb-2">
            <input type="checkbox" className="form-check-input"/>
            <label htmlFor="Check" className="form-check-label">Remember Me</label>
          </div>
          <button type="submit" className="btn btn-success w-100 mt-2">
            SIGN IN
          </button>
        </form>
      </div>
    </div>
      
    </div>
  
    </div>
    </div>
    
  );
}
export default LoginForm;
