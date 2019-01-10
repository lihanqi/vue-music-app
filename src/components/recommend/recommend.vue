<template>
    <div>
        <div v-for="(item, index) in slider"
            :key="`slider-${index}`">
            <a :href="item.linkUrl">
                <img height="100px" :src="item.picUrl" alt="slider-image">
            </a>
        </div>
    </div>
</template>
    
<script>

import { getRecommend } from 'api/recommend';
import {ERR_OK} from 'api/config';

export default {
    name: 'Recommend',
    data() {
        return {
            slider: [],
        }
    },
    created() {
        this._getRecommend();
    },
    methods: {
        _getRecommend() {
            getRecommend().then(res => {
                if (res.code === ERR_OK) {
                    this.slider = res.data.slider;
                }
            }).catch(err => {
                console.error(err);
            })
        }
    }
    
}
</script>
    
<style lang="scss" scoped>
@import '@/common/scss/index.scss';


</style>
