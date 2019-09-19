<template>
  <app-project>
    <h3 slot="title">Semantic Question Pair Matching with Deep Learning</h3>
    <img slot="image1" src="../../../dist/works/portfolio/_SQ001.png" class="img-fluid" />
    <img slot="image2" src="../../../dist/works/portfolio/_SQ002.png" class="img-fluid" />
    <img slot="image3" src="../../../dist/works/portfolio/_SQ003.png" class="img-fluid" />
    <span slot="date">15 August, 2019</span>
    <a
      href="https://github.com/kritish-dhaubanjar/semantic-question-matching"
      target="_blank"
      slot="github"
    >github.com/kritish-dhaubanjar/semantic-question-matching</a>
    <span slot="description">
      A machine learning approach, based upon Levenshtein distance between two sen-
      tences and the sentence-vector encoding using Word2Vec models to experiment with
      a variety of distance metrics and predict their semantic equivalence. We compare the
      standard supervised classification methods such as Logistic Regression, KNN and Ran-
      dom Forest with our artificial neural network (ANN). Our experimental results show
      that the artificial neural network with word embeddings achieves high performance,
      achieved F1-score of 0.6529 with 0.7236 accuracy on the test set.
    </span>
    <ul slot="technology">
      <li>Python</li>
      <li>Machine Learning</li>
      <li>Flask</li>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </app-project>
</template>

<script>
import Project from "./Project";

export default {
  components: {
    appProject: Project
  }
};
</script>
