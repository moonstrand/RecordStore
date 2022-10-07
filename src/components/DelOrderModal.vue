<template>
  <div class="modal fade" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-danger text-light">
          <h5 class="modal-title">刪除此筆訂單</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>確認要刪除此筆訂單？</p>
          <p>訂單編號：{{ order.id }}</p>
        </div>
        <div class="modal-footer">
          <small class="fw-bold text-danger">此動作將無法回復</small>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="$emit('delOrder')"
          >
            刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    order: {},
  },
  emits: ['delOrder'],
  data() {
    return {
      modal: '',
    };
  },
  mixins: [modalMixin],
};
</script>
