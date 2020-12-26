<template>
    <div class="container">
        <div class="input_data">

        </div>
        <div class="output_data">

        </div>
    </div>
</template>

<script>
export default {
    data () {
    return {
      salary: 0,
      prize: 0,
      distCoefficient: null,
      workDays: 0,
      workedDays: 0,
      fullSalary: 0,
      PIT: null,
      salaryHand: 0,
    }
  },
  computed: {
    fullSalaryCalc() {
        this.fullSalary = this.salary * (this.distCoefficient !== null ? this.distCoefficient : 1) * (this.workedDays / this.workDays) + this.prize;
    },
    pitCalc() {
        this.PIT = this.fullSalary * 0.13
    },
    salaryCalc() {
        this.salaryHand = this.salary - this.PIT
    },
    compute() {
        this.fullSalaryCalc()
        this.pitCalc()
        this.salaryCalc()
    }
  }
}
</script>