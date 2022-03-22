import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Enginebox(props) {
  return (
    <div className={'enginebanner_sctn full-w '+ (props.smallbanner ? props.smallbanner : '')}>
      <Container>
        <Row className='minh align-items-center'>
          <Col xs={12}>
            <div className="enginebox">
              <form>
                <ul className="row align-items-center">
                  <li className="col-md-6 col-12 mb-3">
                    <input type="text"
                      className="form-control"
                      placeholder="From city or Airport" />
                  </li>
                  <li className="col-md-6 col-12 mb-3">
                    <input type="text"
                      className="form-control"
                      placeholder="To city or Airport" />
                  </li>
                  <li className="col-xl col-md-6 col-12 mb-3 datepickercity-col">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="bi bi-calendar-week" />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control datepickercity checkin"
                        placeholder="Check in"
                      />
                    </div>
                  </li>
                  <li className="col-xl col-md-6 col-12 mb-3 datepickercity-col">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="bi bi-calendar-week" />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control datepickercity checkout"
                        placeholder="Check out"
                      />
                    </div>
                  </li>
                  <li className="col-xl col-md-6 col-12 mb-3">
                    <select
                      name="Adults"
                      required=""
                      className="form-control nice-selectround wide"
                    >
                      <option value="">Adults</option>
                      <option value={1}>1 Adult</option>
                      <option value={2}>2 Adult</option>
                      <option value={3}>3 Adult</option>
                    </select>
                  </li>
                  <li className="col-xl col-md-6 col-12 mb-3">
                    <select
                      name="Childrens"
                      required=""
                      className="form-control nice-selectround wide">
                      <option value="">Childrens</option>
                      <option value={1}>1 Children</option>
                      <option value={2}>2 Children</option>
                      <option value={3}>3 Children</option>
                    </select>
                  </li>
                  <li className="col-xl col-12 mb-3">
                    <div className="avail-thefform">
                      <button type="submit" className="btn btn-site btn-block ripple-effbtn">
                        <span>BOOK NOW</span>
                      </button>
                    </div>
                  </li>
                </ul>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <img src='/images/banner-shape-14.png' alt='banner-shape-14' className='banner-shape-14 w-100'></img>
    </div>
  )
}
