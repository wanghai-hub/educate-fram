
/**
 * navigation
 */
var indexJs={};
$.extend(indexJs,{
	init : function(){
		var navs=[{id:'1001',pid:'0',text:'教育专题',icon:'img/nav/1.png'},
				  {id:'1002',pid:'0',text:'基础教育',icon:'img/nav/2.png'},
				  {id:'1003',pid:'0',text:'职业教育',icon:'img/nav/3.png'},
				  {id:'1004',pid:'0',text:'高等教育',icon:'img/nav/4.png'},
				  {id:'1005',pid:'0',text:'国际教育',icon:'img/nav/5.png'},
				  {id:'1006',pid:'0',text:'人事管理',icon:'img/nav/6.png'},
				  {id:'1007',pid:'0',text:'计划财务',icon:'img/nav/7.png'},
				  {id:'1008',pid:'0',text:'教育督导',icon:'img/nav/8.png'},
				  {id:'100101',pid:'1001',text:'学校数据概览',url:'pages/test1.html'},
				  {id:'100102',pid:'1001',text:'学校教育情况概览',url:'pages/test2.html'},
				  {id:'100201',pid:'1002',text:'教育地图',url:'pages/test3.html'},
				  {id:'100202',pid:'1002',text:'教育热点',url:''},
				  {id:'100203',pid:'1002',text:'校舍情况',url:''},
				  {id:'100204',pid:'1002',text:'均衡分析',url:''},
				  {id:'100301',pid:'1003',text:'职业教育概览',url:''},
				  {id:'100401',pid:'1004',text:'高等教育概览',url:''},
				  {id:'100501',pid:'1005',text:'国际教育概览',url:''},
				  {id:'100601',pid:'1006',text:'人事管理概览',url:''},
				  {id:'100701',pid:'1007',text:'计划财务概览',url:''},
				  {id:'100801',pid:'1008',text:'教育督导概览',url:'pages/map.html'}];
		this.loadNavs(navs);
		this.resize();
		
		this.TAB_WIDTH=110;
	},
	//load navigation
	loadNavs : function(list){
		this.navs=list;
		
		//load main navigations
		this.renderNavs(this.getByPid(),$('.navtree'));
		this.action();
	},
	loadSubNavs : function(id,$ct){
		if($ct.html()){
			return;
		}
		this.renderNavs(this.getByPid(id),$ct);
		var tt=this;
		$ct.find('li').click(function(){
			var $t=$(this);
			var text=$t.find('a:first').text();
			tt.openTab($t.data('id'),text,$t.data('url'));
		});
	},
	//render navigation
	renderNavs : function(list,$ct){
		$ct.empty();
		for(var i=0,size=list.length;i<size;i++){
			var data=list[i];
			var $li=$('<li></li>').appendTo($ct);
			var str='<a href="javascript:;">';
			if(data.icon){
				str+='<img src="'+data.icon+'"/>';
			}
			if(data.pid=='0'){//main navigation
				str+='<span>'+data.text+'<span>';
			}else{
				str+=data.text;
			}
			str+='</a>';
			$li.append(str);
			if(data.pid=='0'){
				$li.addClass('mainnav');
				$li.append('<ul class="subnav"></ul>');
			}
			$li.data('id',data.id);
			if(data.url){
				$li.data('url',data.url);
			}
		}
	},
	//get nodes by parent id
	getByPid : function(pid){
		if(!pid){
			pid='0';
		}
		var list=this.navs;
		var buf=[];
		for(var i=0,size=list.length;i<size;i++){
			var data=list[i];
			if(data.pid==pid){
				buf.push(data);
			}
		}
		return buf;
	},
	//register actions
	action : function(){
		var tt=this;
		var $lft=$('.leftnav');
		$('.mainnav').click(function(){
			if($lft.hasClass('mini')){
				return;
			}
			var $t=$(this);
			if($t.hasClass('on')){
				return;
			}
			$t.addClass('on').siblings('.mainnav').removeClass('on');
			tt.loadSubNavs($t.data('id'),$t.find('.subnav'));
		});
		
		var timeout;
		$('.mainnav').hover(function(){
			var $t=$(this);
			timeout = window.setTimeout(function(){
				tt.loadSubNavs($t.data('id'),$t.find('.subnav'));				
			},100);
		},function(){
			clearTimeout(timeout);
		});
		
		$('.navtree').find('.mainnav:first').trigger('click');
		
		//navi slide
		$('.navslide').click(function(){
			if($lft.hasClass('mini')){
				$lft.removeClass('mini');
				$('.ct').removeClass('exp');
			}else{
				$lft.addClass('mini');
				$('.ct').addClass('exp');
			}
		});
	},
	resize : function(){
		var h=$(window).height();
		h-=50;
		$('.ct').css('height',h+'px');
		h-=40;
		$('.iframe-page').css('height',h+'px');
	},
	/********* tab operation ***********/
	openTab : function(id,text,url){
		var tt=this;
		var tabwidth=this.TAB_WIDTH;
		var $tab=$('.page-title');
		var $item=$tab.find('#tab'+id);
		
		if(!$item.length){
			$item=$('<span></span>').appendTo($tab);
			$item.attr('id','tab'+id);
			$item.append(text).append('<i></i>');
			$item.data('data',{id:id,text:text,url:url});
			
			$item.click(function(){
				var $t=$(this);
				var d=$t.data('data');
				tt.openTab(d.id,d.text,d.url);
			});
			$item.find('i').click(function(){
				var $t=$(this).parent('span');
				$t.remove();
			});
			var len=$tab.find('span').length;
			$tab.css('width',len*tabwidth+'px');
		}
		
		$item.addClass('on').siblings('span').removeClass('on')
		if(url){
			$('.iframe-page').attr('src',url);
		}
	}
});

$(function(){
	indexJs.init();
});