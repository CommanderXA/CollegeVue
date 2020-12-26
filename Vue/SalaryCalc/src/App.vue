<template>
  <div class="wrapper">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">Salary Calculator</div>
          </div>
        </div>
      </div>
    </header>
    <div class="content"></div>
    <div class="content_window">
      <div class="container">
        <div class="calculator">
          <div class="input_data">
            <form @submit.prevent="compute">
              <div class="form-items">
                <div class="form-item">
                  <label>Salary $</label>
                  <input type="number" required v-model="salary" placeholder="$">
                </div>
                <div class="form-item">
                  <label>Number of Work Days</label>
                  <input type="number" required v-model="workDays">
                </div>
                <div class="form-item">
                  <label>Prize $</label>
                  <input type="number" required v-model="prize" placeholder="$">
                </div>
                <div class="form-item">
                  <label>Number of Worked Days</label>
                  <input type="number" required v-model="workedDays">
                </div>
                <div class="form-item">
                  <label>District Coefficient %</label>
                  <input type="number" v-model="distCoefficient" placeholder="%">
                </div>
              </div>
              <button @click="compute" class="btn btnPrimary">Calculate</button>
            </form>
          </div>
          <div class="output_data">
            <div class="out_data">
              <div class="out_item">
                <h1>Full Salary: </h1>${{ parseInt(fullSalary) }}
              </div>
              <div class="out_item">
                <h1>PIT: </h1>${{ parseInt(PIT) }}
              </div>
              <br>
              <div class="out_item">
                <h1><u>Hand Salary:</u> </h1>${{ parseInt(salaryHand) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      salary: '',
      prize: '',
      distCoefficient: null,
      workDays: '',
      workedDays: '',
      fullSalary: 0,
      PIT: 0,
      salaryHand: 0,
    }
  },
  methods: {
    compute() {
        this.fullSalary = parseInt(this.salary) * (this.distCoefficient !== null ? parseInt(this.distCoefficient) : 1) * (parseInt(this.workedDays) / parseInt(this.workDays)) + parseInt(this.prize);
        this.PIT = this.fullSalary * 0.13;
        this.salaryHand = parseInt(this.fullSalary) - parseInt(this.PIT);
    }
  }
}
</script>

<style lang="scss">
body {
  background: white;
}
.content {
  margin-top: 120px;
}
.content_window {
  background: white;
  width: 680px;
  margin: 0 auto;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  margin-bottom: 50px;
}
.input_data {
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    .form-items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 20px;
    }
    .btn {
      width: 200px;
    }
  }
}
.output_data {
  width: 100%;
  padding: 20px 20px 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
}
.out_data {
  width: 100%;
  border-radius: 20px;
  color: #43b379;
  padding: 20px;
}
.out_item {
  display: flex;
  justify-content: space-between;
}
</style>
