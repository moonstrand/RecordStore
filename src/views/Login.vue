<template>
  <div class="nav-bg"></div>
  <div class="login-bg">
    <section class="container">
      <div class="row login-h d-flex justify-content-center align-items-center">
        <div class="input-bg col-lg-6 col-md-8 col-11 border border-1 p-5">
          <p
            class="
              h2
              login-title
              border-start border-secondary border-5
              ps-3
              mb-4
            "
          >
            後台登入
          </p>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button
            class="btn btn-lg btn-secondary fw-bold w-100 mt-3"
            type="submit"
          >
            登入
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import "../assets/components/_login.scss";
</style>
