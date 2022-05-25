/* eslint-disable no-tabs */
// const onIndexRestaurantSuccess = function (response) {
// 	let data = `<tr>
//         <th>Restaurant</th>
//         <th>Website</th>
//         <th>Wings</th>
//         <th></th>
//       </tr>`
// 	for (let i = 0; i < response.questions.length; i++) {
// 		const restName = response.questions[i].name
// 		const restId = response.questions[i]._id
// 		const restWebsite = response.questions[i].website
// 		const wings = response.questions[i].wings

// 		// I'm running into an issue here because not all the restaurants are going to have wings. Some are going to have undefined fields for their wings. And jQuery can't read those.

// 		data += `
//       <tr class="restaurant-row" id="restaurant-content-${i}">
//         <td class="show-restaurant-form" data-rest-name="${restName}" data-rest-website="${restWebsite}" data-table-row="${i}" data-restid="${restId}">${restName}</td>
//         <td class="show-restaurant-form" data-rest-name="${restName}" data-rest-website="${restWebsite}" data-table-row="${i}" data-restid="${restId}">${restWebsite}</td>
//         <td><table><tr>
//         <th>Name</th><th>Spiciness</th><th>Quality</th>
//         </tr>`

// 		for (let j = 0; j < answers.length; j++) {
// 			if (answers.length !== 0) {
// 				data += `
//           <tr>
//             <td class="show-wing-form" " data-table-row="${i}" data-qid="${QId}" data-answerid="${answers[j]._id}">${answers[j].name}</td>
//             <td class="show-wing-form" data-wing-name="${answers[j].name}" data-wing-spiciness="${answers[j].spiciness}" data-wing-quality="${answers[j].quality}" data-table-row="${i}" data-restid="${restId}" data-wingid="${answers[j]._id}">${answers[j].spiciness}</td>
//             <td class="show-wing-form" data-wing-name="${answers[j].name}" data-wing-spiciness="${answers[j].spiciness}" data-wing-quality="${answers[j].quality}" data-table-row="${i}" data-restid="${restId}" data-wingid="${answers[j]._id}">${answers[j].quality}</td>
//           </tr>
//             `
// 			}
// 		}

// 		data += `
//         </table></td>
//         <td><button class="show-create-wing-form" data-restid="${restId}" data-table-row="${i}">Add Wing</button></td>
//       </tr>`
// 	}
// 	$('#wings-table').html(data)
// 	$('.show-create-wing-form').show()
// }
