<script>

</script>


<div class="show-hide-container">
    <label for="show-hide-question-body" class="show-hide-btn">Enunciado
        <input id="show-hide-question-body" type="checkbox" style="display: none;" checked>
    </label>
    <div class="show-hide-content-div"><slot></slot></div>
</div>



<style>
    .show-hide-btn {
        width: 80%;
        padding: 0rem 1.5rem;
        font-size: 1.5rem;
        text-align: center;
        border: 1px solid black;
        background: linear-gradient(145deg, #2085d8, #3230b6);
        border-radius: 1rem;
        display: block;
    }

    .show-hide-container {
        margin: 5vh 0vh;
    }

    label:has(input:checked) + .show-hide-content-div {
        display: none;
    }
</style>