<template>
  <div class="media-page">
    <div class="image-section">
      <h2>图片展示</h2>
      <ul class="img-list">
        <li class="img-item">
          <img class="img" src="../../assets/img/blog/thumbnail-0.jpg" alt="thumbnail-0.jpg">
        </li>
        <li class="img-item">
          <img class="img" src="../../assets/img/blog/thumbnail-1.jpg" alt="thumbnail-1.jpg">
        </li>
        <li class="img-item">
          <img class="img" src="../../assets/img/blog/thumbnail-2.jpg" alt="thumbnail-2.jpg">
        </li>
        <li class="img-item">
          <img class="img" src="../../assets/img/blog/thumbnail-3.jpg" alt="thumbnail-3.jpg">
        </li>
        <li class="img-item">
          <img class="img" src="../../assets/img/blog/thumbnail-4.jpg" alt="thumbnail-4.jpg">
        </li>
        <li class="img-item">
          <img class="img" src="../../assets/img/blog/thumbnail-5.jpg" alt="thumbnail-5.jpg">
        </li>
        <li class="img-item">
          <img class="img" src="../../assets/img/blog/thumbnail-6.jpg" alt="thumbnail-6.jpg">
        </li>
        <li class="img-item">
          <img class="img" src="../../assets/img/blog/thumbnail-7.jpg" alt="thumbnail-7.jpg">
        </li>
        <li class="img-item">
          <img class="img" src="../../assets/img/blog/thumbnail-8.jpg" alt="thumbnail-8.jpg">
        </li>
        <li class="img-item">
          <img class="img" src="../../assets/img/blog/thumbnail-9.jpg" alt="thumbnail-9.jpg">
        </li>
        <li class="img-item">
          <img class="img" src="../../assets/img/blog/thumbnail-10.jpg" alt="thumbnail-10.jpg">
        </li>
      </ul>
    </div>
    <div class="music-section">
      <h2>音乐展示</h2>
      <audio controls>
        Your browser does not support the <code>audio</code> element.
        <source src="../../assets/media/music/lijian-xiangwang.mp3" type="audio/mp3">
      </audio>
    </div>
    <div class="video-section">
      <h2>视频展示</h2>
      <video width="320" height="240" controls>
        您的浏览器不支持 <code>video</code> 标签。
        <source src="../../assets/media/video/movie.mp4" type="video/mp4">
        <source src="../../assets/media/video/movie.ogg" type="video/ogg">
      </video>
    </div>
  </div>
</template>

<script>
import '@/assets/css/media.scss';

export default {
  name: 'Media'
}
</script>

<style scoped>

</style>
