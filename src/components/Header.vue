<template>
  <header>
    <b-container class="col-xxl-8 px-4 py-5">
      <b-row class=" flex-lg-row-reverse align-items-center g-5">
        <b-col cols="10" lg="6" class="sr-only">
          <b-img
            src="img/shapes2.png"
            class="d-block mx-lg-auto img-fluid"
            loading="lazy"
          />
        </b-col>
        <b-col lg="6" sm="12" class="text-start">
          <h1 class="display-3 fw-bold lh-1 mb-3">
            Juguetería Otto Klaus
          </h1>
          <p class="lead">
            Bienvenid@s a Otto Klaus, tienda de juguetes online. Descubre
            nuestra amplio catálogo de productos al mejor precio. ¡Visítanos!
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href="#catalogo" class="btn btn-primary btn-lg px-4 me-md-2">
              Ver catálogo
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style></style>
