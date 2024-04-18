<script>
    import ObjectiveQuestion from '$lib/components/objective_question.svelte';
    export let data
    const { questionsData } = data
    const questions = questionsData.questions
    let questionIndex = 0;
</script>

<div class="page-body green-theme">
    <ObjectiveQuestion question={questions[questionIndex]} question_index={questionIndex}/>
</div>


<style>
    .page-body{
        min-height: calc(100vh - 8vh - 8vh);
        display: flex;
        justify-content: center;
    }
</style>