<script>
  import allAPI from "./api/API.js";

  let name = "";

  let age;
  let gender;
  let nation;

  const handleClick = (event) => {
    makePredictions(name);
  };

  const onKeyPress = (e) => {
    if (e.charCode === 13) makePredictions(name);
  };

  function makePredictions(name) {
    if (name) {
      allAPI.predictAge(name).then();

      Promise.all([
        allAPI.predictAge(name),
        allAPI.predictGender(name),
        allAPI.predictNation(name),
      ]).then((values) => {
        age = values[0];
        gender = values[1];
        nation = values[2];
      });
    }
  }
</script>

<main>
  <div class="container">
    <div class="row justify-content-md-center mt-5">
      <h1 class="text-center">Predict Age, Nation, Gender</h1>
    </div>
    <div class="row justify-content-md-center mt-5">
      <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <div class="input-group input-group-lg ">
          <span class="input-group-text" id="inputGroup-sizing-lg"
            >Enter Name</span
          >
          <input
            bind:value={name}
            type="text"
            class="form-control col-6"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            on:keypress={onKeyPress}
          />
        </div>
      </div>
    </div>

    {#if age && nation && nation}
      <div class="row justify-content-md-center mt-5 text-center">
        <div class="card" style="width: 36rem;">
          <div class="card-body">
            <h5 class="card-title text-capitalize">Name: {age.name}</h5>
            {#if age.age}<h5 class="card-title">Age: {age.age}</h5>{/if}
            {#if gender.gender}
              <h5 class="card-title text-capitalize">
                Gender: {gender.gender} ({(gender.probability * 100).toFixed(
                  2
                )}% Confident)
              </h5>
            {/if}
            {#if nation.country.length > 0}
              <div class="card-text mt-4">
                <h5>Possible Nations</h5>
                {#each nation.country as country}
                  <h6 class="card-title">
                    {#if country.country_id}<img
                        src="https://www.countryflags.io/{country.country_id}/flat/64.png"
                        alt=""
                      />
                    {/if}
                    {country.country_id ? country.country_id : "Other"} - ({(
                      country.probability * 100
                    ).toFixed(2)}%)
                  </h6>
                {/each}
              </div>
            {/if}
          </div>
        </div>
      </div>
    {/if}
  </div>
</main>

<style>
</style>
