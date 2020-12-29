let logoData = [
{ url: './Images/logo1.gif', name: 'logo1', altText: 'logo1'},
{ url: './Images/logo2.gif', name: 'logo2', altText: 'logo2'},
{ url: './Images/logo3.gif', name: 'logo3', altText: 'logo3'},
{ url: './Images/logo4.gif', name: 'logo4', altText: 'logo4'},
{ url: './Images/logo5.gif', name: 'logo5', altText: 'logo5'},
{ url: './Images/logo6.gif', name: 'logo6', altText: 'logo6'},
{ url: './Images/logo7.gif', name: 'logo7', altText: 'logo7'},
{ url: './Images/logo8.gif', name: 'logo8', altText: 'logo8'}
];

let htmlstr = "";


logoData.map(item => {
    console.log(item)
htmlstr += `<div class='SW24-01-card'>
<div class='SW24-01-img-cover'>
<img class='SW24-01-img' src=${item.url} alt=${item.altText}>
</div>
</div> `
});

$('.SW24-01-cards-wrapper').html(htmlstr);
