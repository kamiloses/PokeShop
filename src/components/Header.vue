<script setup lang="ts">
import {i} from "vite/dist/node/chunks/moduleRunnerTransport";

let isAuthenticated=false;






</script>


<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <img src="/favicon.ico" style="width: 40px" class="mx-3" alt="ShopOPedia" />

  <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" href="#">Home</a>
      </li>

      <li class="nav-item">
        <a class="nav-link active" href="#">Product</a>
      </li>

      <li class="nav-item">
        <a class="nav-link active" href="#">Contact Us</a>
      </li>
    </ul>

    <ul class="d-flex navbar-nav">


      <li class="nav-link" v-if="isAuthenticated">Welcome, user@example.com</li>

      <li class="nav-item dropdown">
        <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        >
          <i class="bi bi-laptop"></i>
        </a>
        <ul class="dropdown-menu">
          <li>
            <button class="dropdown-item">
              <i class="bi bi-sun"></i> &nbsp; Light
            </button>
          </li>
          <li>
            <button class="dropdown-item">
              <i class="bi bi-moon-stars-fill"></i> &nbsp; Dark
            </button>
          </li>
        </ul>
      </li>

      <li class="nav-item">
        <a class="nav-link active" href="#" v-if="!isAuthenticated">Sign In</a>
      </li>

      <li  class="nav-item">
        <a class="nav-link active" href="#" v-if="!isAuthenticated">Sign Up</a>
      </li>

      <li  class="nav-item">
        <button class="nav-link" v-if="isAuthenticated">Sign Out</button>
      </li>
    </ul>
  </div>
</div>
</nav>
</template>
