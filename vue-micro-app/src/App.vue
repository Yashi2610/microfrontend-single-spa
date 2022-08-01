<template>
  <div id="app" class="container p-5">
    <!-- Button trigger modal -->
    <div class="text-center">
      <button
       @click="display()"
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Order Now
      </button>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-danger" id="exampleModalLabel">
              Books
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
<div v-if="data.length >0" style="text-align:center">
             <h6 style="color:green">You have successfully purchased order..!</h6>
             <h6>Order Details:</h6>
    <table class="mx-auto" style="width:100%">
      <tr>
        <th>Book title</th>
        <th style="text-align:center">Book Price</th>
        <th style="text-align:center">Book amount</th>
      </tr>
      <tr v-for='Course in data' :key="Course.id">
        <td>{{Course.title}}</td>
        <td style="text-align:center">{{Course.price}}</td>
        <td style="text-align:center">{{Course.amount}}</td>
      </tr>
    </table>
    </div>
    <div v-else>
  <p>Your cart is empty.</p>
    </div>
              <div class="modal-footer">
            <button
              type="button"
              class="btn btn-warning"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//importing bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default {
  name: "app",
  data() {
    return {
      data: JSON.parse(sessionStorage.getItem("Data")),
    };
  },

  methods: {
  display() {
   this.data = JSON.parse(sessionStorage.getItem("Data"))
  }
}


};
// console.log(bookTitle,"Data from storage")
</script>
