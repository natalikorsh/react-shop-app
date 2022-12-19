function GoodsItem(props) {
  const {
    mainId: id,
    displayName: title, 
    displayDescription: description, 
    displayAssets: [{ background }],
    price: { regularPrice: price },
    addToCart = Function.prototype,
  } = props;
  
  return (<div className="card blue-grey darken-4 grey-text text-lighten-5">
      <div className="card-image">
        <img src={background} alt={title}/>
      </div>
      <div className="card-content">
      <span className="card-title">{title}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button 
          className="btn blue-grey lighten-4"
          onClick={() => addToCart({id, title, price, background})}
          >Купить
          </button>
        <span className="price right">{price} руб.</span>
      </div>
    </div>)
}

export {GoodsItem};

// {
//   "mainId": "EID_Marionette",
//   "displayName": "Master of Puppets",
//   "displayDescription": "I'm pulling your strings.",
//   "displayType": "Эмоция",
//   "mainType": "emote",
//   "offerId": "v2:/9ae3c454a400f9733de51d0e225cd83afeb052e7926ae636a13d58d054718956",
//   "displayAssets": [
//       {
//           "displayAsset": "DAv2_EID_Marionette",
//           "materialInstance": "MI_EID_Marionette",
//           "url": "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_EID_Marionette/MI_EID_Marionette.png",
//           "flipbook": null,
//           "background_texture": "https://media.fortniteapi.io/images/textures/Icon.png",
//           "background": "https://media.fortniteapi.io/images/cosmetics/9351b65f0db86dc7ddb7112d369dc0ea/v2/MI_EID_Marionette/background.png",
//           "full_background": "https://media.fortniteapi.io/images/cosmetics/9351b65f0db86dc7ddb7112d369dc0ea/v2/MI_EID_Marionette/info.ru.png"
//       }
//   ],
//   "firstReleaseDate": "2022-12-14",
//   "previousReleaseDate": null,
//   "giftAllowed": true,
//   "buyAllowed": true,
//   "price": {
//       "regularPrice": 500,
//       "finalPrice": 500
//   },
//   "rarity": {
//       "id": "Rare",
//       "name": "РЕДКИЙ"
//   },
//   "series": {
//       "id": "CreatorCollabSeries",
//       "name": "Звёздная серия"
//   },
//   "banner": {
//       "id": "FourPlayerEmote",
//       "name": "Четыре эмоции!",
//       "intensity": "High"
//   },
//   "offerTag": {
//       "id": "marionettedesc",
//       "text": "Вы случайным образом выберете соло-гитару, ритм-гитару, бас-гитару или ударные. К вам смогут присоединиться до трёх игроков (у каждого будет свой инструмент) вне зависимости от того, есть у них такая эмоция или нет!"
//   },
//   "granted": [
//       {
//           "id": "EID_Marionette",
//           "type": {
//               "id": "emote",
//               "name": "Эмоция"
//           },
//           "name": "Master of Puppets",
//           "description": "I'm pulling your strings.",
//           "rarity": {
//               "id": "Rare",
//               "name": "РЕДКИЙ"
//           },
//           "series": {
//               "id": "CreatorCollabSeries",
//               "name": "Звёздная серия"
//           },
//           "images": {
//               "icon": "https://media.fortniteapi.io/images/9351b65f0db86dc7ddb7112d369dc0ea/transparent.png",
//               "featured": "https://media.fortniteapi.io/images/9351b65f0db86dc7ddb7112d369dc0ea/full_featured.png",
//               "background": "https://media.fortniteapi.io/images/cosmetics/9351b65f0db86dc7ddb7112d369dc0ea/v2/background.png",
//               "icon_background": "https://media.fortniteapi.io/images/cosmetics/9351b65f0db86dc7ddb7112d369dc0ea/v2/icon_background.png",
//               "full_background": "https://media.fortniteapi.io/images/cosmetics/9351b65f0db86dc7ddb7112d369dc0ea/v2/info.ru.png"
//           },
//           "video": null,
//           "audio": null,
//           "gameplayTags": [
//               "Cosmetics.EmoteType.Dance",
//               "Cosmetics.Source.ItemShop",
//               "Cosmetics.UserFacingFlags.Synced",
//               "Cosmetics.Filter.Season.23"
//           ],
//           "set": null
//       }
//   ],
//   "priority": -1,
//   "section": {
//       "id": "Featured",
//       "name": "Рекомендуемое",
//       "landingPriority": 70
//   },
//   "groupIndex": 0,
//   "storeName": "BRWeeklyStorefront",
//   "tileSize": "Normal",
//   "categories": [
//       "Panel 01"
//   ]
// }