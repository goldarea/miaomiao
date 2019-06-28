<template>
    <div id="main">
        <top/>
        <div id="content">
			<div class="movie_menu">
				<router-link tab="div" to="/movie/city" class="city_name">
					<span>大连</span>
                    <i class="iconfont icon-lower-triangle"></i>
				</router-link>
				<router-link tab="div" to="/movie/nowShowing" class="hot_swtich">
					<div class="hot_item">正在热映</div>
				</router-link>
                <router-link tab="div" to="/movie/coming" class="hot_swtich">
					<div class="hot_item">即将上映</div>
				</router-link>
				<router-link tab="div" to="/movie/search" class="search_entry">
					<i class="iconfont icon-sousuo"></i>
				</router-link>
			</div>
        </div>
        <keep-alive>
            <router-view/>
        </keep-alive>
        <tabBar/>
    </div>
</template>
<script>
import top from '@/components/Header.vue'
import tabBar from '@/components/TabBar.vue'

export default {
    name : 'Movie',
    components: {
        tabBar,
        top
    }

}
</script>
<style lang="scss" scoped>
.movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.movie_menu .city_name{ margin:0 20px; height:100%; line-height: 45px;}
.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.movie_menu .search_entry{ margin:0 20px; height:100%; line-height: 45px;}
.movie_menu .search_entry i{  font-size:24px; color:red;}
.movie_menu .router-link-active {
    color: #ef4238; 
    border-bottom: 2px #ef4238 solid;
}
</style>
