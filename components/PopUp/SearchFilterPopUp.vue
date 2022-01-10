<template>
  <div class="filter-wrapper" :class="{'empty-list': !listData || (listData && !listData.length)}">
    <input ref="search" v-if="listOf !== 'examination'" type="text" class="input-search" v-model="search" placeholder="Search">
    <div class="list-option">
      <p v-for="(list, index) in listData"
        :key="index"
        @click="chooseFilter(list)"
        class="option-item"
        :class="{'selected': activeFilter && activeFilter[listOf] === list}">{{list}}
      </p>
    </div>
    <p v-if="!listData || (listData && !listData.length)" class="empty-list">
      Tidak ada pilihan tersedia
    </p>
  </div>
</template>
<script>
import provinces from "@/mock/province.json";
import cities from "@/mock/city.json";
import examinations from "@/mock/examination.json";
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    listOf: String,
    optionSelected: String,
  },
  data(){
    return {
      provinces,
      cities,
      examinations,
      search: '',
    }
  },
  mounted() {
    if (this.$refs.search) {
      this.$refs.search.focus()
    }
  },
  computed: {
    ...mapGetters({
      activeFilter: "filter/activeFilter",
    }),
    listData() {
      if (this.listOf === 'province') {
        if (this.provinces && this.provinces.length && this.search) {
          let filteredList = this.provinces.filter(t => t.toLowerCase().includes(this.search.toLowerCase()))
          return filteredList
        }
        return provinces;
      } else if (this.listOf === 'city') {
        if (this.cities && this.cities.length && this.search) {
          let filteredList = this.cities.filter(t => t.toLowerCase().includes(this.search.toLowerCase()))
          return filteredList
        }
        return this.cities
      } else {
        return this.examinations
      }
    }
  },
  methods: {
    ...mapActions({
      updateFilter: 'filter/updateFilter',
    }),
    chooseFilter(filter) {

      const data = {
        filter: this.activeFilter[this.listOf] === filter ? '' : filter,
        target: this.listOf
      }
      this.updateFilter(data)
      this.$emit('closeFilter');
    }
  }
}
</script>
<style lang="scss" scoped>
  .filter-wrapper {
    width: calc(100% - 30px);
    height: 250px;
    position: absolute;
    top: 85px;
    background: $clr-white;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    z-index: 1;
    padding: 15px;
    &.empty-list {
      height: auto;
    }
    input {
      width: 100%;
      margin-bottom: 15px;
      height: 40px;
    }
    .list-option {
      height: calc(100% - 60px);
      overflow: scroll;
      cursor: pointer;
      p {
        &.selected {
          background: $clr-secondary;
        }
        &:not(:last-child) {
          margin-bottom: 5px;
        }
      }
    }
  }
</style>
