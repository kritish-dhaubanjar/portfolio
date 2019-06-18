<template>
  <div id="aboutme" class="page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2 col-md-2 col-sm-3 col-4">
          <h4>Resume</h4>
        </div>
        <div class="col d-md-none d-none d-sm-none d-lg-block">
          <p class="headline text-muted">1 Years of Experience</p>
        </div>
      </div>
      <br>
      <br>
      <div class="row">
        <div class="info col-lg-4 col-md-4 col-12">
          <div>
            <div>
              <h6>
                <span>Education</span>
              </h6>
              <h6 class="date">
                <p>2010</p>
              </h6>
            </div>
            <div class="detail">
              <h6>Specialization Course</h6>
              <p class="text-muted">University of Studies</p>
              <p>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p>
            </div>
          </div>

          <div>
            <div>
              <h6 class="date">
                <p>2010</p>
              </h6>
            </div>
            <div class="detail">
              <h6>Specialization Course</h6>
              <p class="text-muted">University of Studies</p>
              <p>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p>
            </div>
          </div>

          <div>
            <div>
              <h6 class="date">
                <p>2010</p>
              </h6>
            </div>
            <div class="detail">
              <h6>Specialization Course</h6>
              <p class="text-muted">University of Studies</p>
              <p>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p>
            </div>
          </div>
        </div>

        <div class="info col-lg-4 col-md-4 col-12">
          <div>
            <div>
              <h6>
                <span>Experience</span>
              </h6>
              <h6 class="date">
                <p>Dec 2012 - Current</p>
              </h6>
            </div>

            <div class="detail">
              <h6>Frontend-developer</h6>
              <p class="text-muted">Web Agency</p>
              <p>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p>
            </div>
          </div>
          <div>
            <div>
              <h6 class="date">
                <p>Dec 2012 - Current</p>
              </h6>
            </div>

            <div class="detail">
              <h6>Frontend-developer</h6>
              <p class="text-muted">Web Agency</p>
              <p>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p>
            </div>
          </div>
          <div>
            <div>
              <h6 class="date">
                <p>Dec 2012 - Current</p>
              </h6>
            </div>

            <div class="detail">
              <h6>Frontend-developer</h6>
              <p class="text-muted">Web Agency</p>
              <p>Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.</p>
            </div>
          </div>
        </div>

        <div class="info col-lg-4 col-md-4 col-12">
          <div>
            <div>
              <h6>
                <span>Design Skills</span>
              </h6>
            </div>

            <div class="skill">
              <h6>Web Design</h6>
              <div class="row">
                <div class="col-12">
                  <hr>
                </div>
              </div>
            </div>

            <div class="skill">
              <h6>Graphic Design</h6>
              <div class="row">
                <div class="col-12">
                  <hr>
                </div>
              </div>
            </div>

            <div class="skill">
              <h6>Print Design</h6>
              <div class="row">
                <div class="col-12">
                  <hr>
                </div>
              </div>
            </div>
          </div>

          <br>

          <div>
            <div>
              <h6>
                <span>Coding Skills</span>
              </h6>
            </div>

            <div class="skill">
              <h6>Web Design</h6>
              <div class="row">
                <div class="col-12">
                  <hr>
                </div>
              </div>
            </div>

            <div class="skill">
              <h6>Graphic Design</h6>
              <div class="row">
                <div class="col-12">
                  <hr>
                </div>
              </div>
            </div>

            <div class="skill">
              <h6>Print Design</h6>
              <div class="row">
                <div class="col-12">
                  <hr>
                </div>
              </div>
            </div>

            <div class="skill">
              <h6>Print Design</h6>
              <div class="row">
                <div class="col-12">
                  <hr>
                </div>
              </div>
            </div>

            <div class="skill">
              <h6>Print Design</h6>
              <div class="row">
                <div class="col-12">
                  <hr>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button type="button" class="btn btn-outline-danger">Download CV</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.date {
  font-size: 0.9rem;
  margin-left: -0.6rem;
  padding-bottom: 0;

  p {
    font-family: "Oswald", sans-serif !important;
    display: inline;
    color: #fff;
    background-color: #9bd952;
    padding: 0.25rem 2rem 0.25rem 4rem;
  }
  p::after {
    content: "";
    position: relative;
    float: left;
    bottom: -1.6rem;
    right: -0.6rem;
    border-top: 10px solid green;
    border-left: 10px solid #fff;
  }
}

.detail {
  padding-left: 2rem;
  border-left: 1px #eee solid;
  margin-left: 0.6rem;
  padding-top: 1rem;
  h6 {
    font-size: 1rem;
    padding-bottom: 0;
    margin-bottom: 0.1rem;
  }
  .text-muted {
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
  }
}

.skill {
  padding-bottom: 0.8rem;
  h6 {
    font-size: 0.85rem;
    padding-bottom: 0;
  }
  .row {
    margin: auto;
  }
  .col-12 {
    border-radius: 5rem;
    border: solid 0.1rem #e65859;
    padding: 0;
  }
  hr {
    border-radius: 5rem;
    width: 70%;
    margin: 0.2rem;
    border: 3px solid #e65859;
  }
}

button {
  font-size: 0.85rem;
  border-radius: 0;
  border-width: 2px;
  font-family: "PT Sans", sans-serif !important;
}
</style>

