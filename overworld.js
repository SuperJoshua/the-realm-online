/* overworld.js
depends on: categories.js, cells.js, regions.js
*/

const world_map = document.getElementById("world_map")
world_map.style.fontSize = "0.3em"
world_map.style.left = "0px"
world_map.style.top = "0px"

let map_moving = false
let old_map_x = parseInt(world_map.style.left)
let old_map_y = parseInt(world_map.style.top)
let rel_x = 0
let rel_y = 0

const move_map = function(ev){
   map_moving = true
   rel_x = ev.pageX
   rel_y = ev.pageY
}

const moving_map = function(ev){
   if (map_moving){
      world_map.style.left = `${(old_map_x + ev.pageX - rel_x).toString()}px`
      world_map.style.top = `${(old_map_y + ev.pageY - rel_y).toString()}px`
   }
}

const drop_map = function(ev){
   map_moving = false
   old_map_x = parseInt(world_map.style.left)
   old_map_y = parseInt(world_map.style.top)
}

const zoom_map = function(ev){
   ev.preventDefault()
   font_size = parseFloat(world_map.style.fontSize)
   let y = ev.deltaY
   if (y < 0) {
      font_size += 0.1
   } else {
      font_size -= 0.1
      if (font_size < 0.1) {
         font_size = 0.1
      }
   }
   world_map.style.fontSize = font_size.toString() + "em"
}

const info_box = document.getElementById("info_box")

const show_info_box = function(cell){
   const room = cells[cell.id]
   
   info_box.innerHTML = ''
   
   const room_number = document.createElement("header")
   room_number.innerHTML = cell.id
   info_box.appendChild(room_number)

   const room_name = document.createElement("p")
   room_name.innerHTML = `"${room["name"]}"`
   info_box.appendChild(room_name)

   const room_region = document.createElement("p")
   room_region.innerHTML = `region: ${room["region"]}`
   info_box.appendChild(room_region)

   if ("dungeon" in room){
      const room_dungeon = document.createElement("p")
      room_dungeon.innerHTML = `dungeon entrance to: ${room["dungeon"]}`
      info_box.appendChild(room_dungeon)
   }

   if ("maps" in room){
      const room_maps = document.createElement("ul")
      room_maps.innerHTML = "potential off-site maps:"
      for (const item of room["maps"]){
         const li = document.createElement("li")
         map_link = document.createElement("a")
         map_link.href = item
         map_link.innerHTML = "map"
         li.appendChild(map_link)
         room_maps.appendChild(li)
      }
      info_box.appendChild(room_maps)
   }

   if ("feature" in room){
      const room_feature = document.createElement("p")
      room_feature.innerHTML = `feature: ${room["feature"]}`
      info_box.appendChild(room_feature)
   }

   if ("teleporter" in room){
      const room_teleporter = document.createElement("p")
      room_teleporter.innerHTML = `teleports to: ${room["teleporter"]}`
      info_box.appendChild(room_teleporter)
   }

   if ("shop" in room){
      const room_shop = document.createElement("p")
   room_shop.innerHTML = `shop name: ${room["shop"]}`
      info_box.appendChild(room_shop)
   }

   if ("teacher" in room){
      const room_teacher = document.createElement("p")
   room_teacher.innerHTML = `teacher of: ${room["teacher"]}`
      info_box.appendChild(room_teacher)
   }

   if ("sells" in room){
      const room_sells = document.createElement("ul")
      room_sells.innerHTML = "sells:"
      for (const item of room["sells"]){
         const li = document.createElement("li")
         li.innerHTML = item
         room_sells.appendChild(li)
      }
      info_box.appendChild(room_sells)
   }

   if (!("dungeon" in room) && !(monsterless_regions.includes(room["region"]))){
      enemies = regions[room["region"].toString()]
      const room_enemies = document.createElement("ul")
      room_enemies.innerHTML = "potential enemies and their hit point ranges:"
      for (const [enemy, hp] of Object.entries(regions[room["region"]])){
         const li = document.createElement("li")
         li.innerHTML = `${enemy}: ${hp[0] || ""} - ${hp[1] || ""}`
         room_enemies.appendChild(li)
      }
      info_box.appendChild(room_enemies)
   }

   info_box.style.display = "block"
   hide_info_button.style.display = "block"
}

const hide_info_button = document.getElementById("hide_info")

const hide_info = function(){
   hide_info_button.style.display = "none"
   info_box.style.display = "none"
}

const collections_box = document.getElementById("collections_box")

let animated_cells = []

const stop_animation = function(){
   for (let cell of animated_cells){
      const x = document.getElementById(cell)
      x.classList.toggle('highlight')
   }

   animated_cells = []
}

const highlight = function(category){
   stop_animation()
   
   animated_cells = Array.from(categories[category])
   for (let cell of animated_cells){
      const x = document.getElementById(cell)
      x.classList.toggle('highlight')
   }
}

const show_collections = function(){
   collections_box.style.display = "block"
   hide_collections_button.style.display = "block"
}

const hide_collections_button = document.getElementById("hide_collections")

const hide_collections = function(){
   stop_animation()

   hide_collections_button.style.display = "none"
   collections_box.style.display = "none"
}
