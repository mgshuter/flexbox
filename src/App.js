import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const publicIp = require('public-ip');
	const internalIp = require('internal-ip');
	(async () => {
		const myPublicIP = await publicIp.v4();
		console.log('public IP', myPublicIP);
	})();
	// (async () => {
	// 	const myPrivateIP = await internalIp.v4();
	// 	console.log('private IP', myPrivateIP);
	// })();

	return (
		<div>
			<h1>{}</h1>
			<div className="container">
				<form>
					<div className="form-row">
						<label for="name">Name:</label>
						<input type="text" id="name" />
					</div>
					<div className="form-row">
						<label for="favColor">Favorite Color:</label>
						<input type="text" id="favColor" />
					</div>
				</form>
			</div>
			<div className="column-layout">
				<div className="main-column">
					<h2>Main Column</h2>
					<p>
						君不見，黃河之水天上來，奔流到海不復回。 君不見，高堂明鏡悲白髮，朝如青絲暮成雪。 人生得意須盡歡，莫使金樽空對月。 天生我材必有用，千金散盡還復來。 烹羊宰牛且爲樂，會須一飲三百杯。
						岑夫子，丹丘生，將進酒，杯莫停。 與君歌一曲，請君爲我傾耳聽。(傾耳聽 一作：側耳聽) 鐘鼓饌玉不足貴，但願長醉不復醒。(不足貴 一作：何足貴；不復醒 一作：不願醒/不用醒)
						古來聖賢皆寂寞，惟有飲者留其名。(古來 一作：自古；惟 通：唯) 陳王昔時宴平樂，斗酒十千恣歡謔。 主人何爲言少錢，徑須沽取對君酌。 五花馬，千金裘，呼兒將出換美酒，與爾同銷萬古愁。
					</p>
				</div>
				<div className="sidebar-one">
					<h3>Sidebar One</h3>
					<p>
						李白（701年－762年），字太白，號青蓮居士，唐朝浪漫主義詩人，被後人譽爲“詩仙”。祖籍隴西成紀(待考)，出生於西域碎葉城，4歲再隨父遷至劍南道綿州。李白存世詩文千餘篇，有《李太白集》傳世。762年病逝，享年61歲。其墓在今安徽當塗，四川江油、湖北安陸有紀念館。
					</p>
				</div>
				<div className="sidebar-two">
					<h3>Sidebar Two</h3>
					<p>何處名僧到水西，乘舟弄月宿涇溪。平明別我上山去， 手攜金策踏雲梯。騰身轉覺三天近，舉足回看萬嶺低。 謔浪肯居支遁下，風流還與遠公齊。此度別離何日見， 相思一夜暝猿啼。</p>
				</div>
			</div>
			<div className="call-outs-container">
				<div className="call-out">
					<h4>Feature 1</h4>
					<p>
						(( 藍卡 Diesel Treatment))，柴油專用噴油嘴清潔暨提效劑。 各位老闆，這是柴油車專用，汽油車不可以加。
						1卡2顆，1顆對應60公升柴油，專門針對柴油配方，主要成分為噴油嘴清潔劑，可提升cDPF的自清效率及效果，有效減少自清頻率，並添加各種配方，柴油車完整對應，功效如下
						專門針對採用ULSD(超低硫柴油，台塑及中油都是)的柴油引擎調制配方，有以下6項主要功能: 1.清潔噴油嘴 Injector Clean 2.提高燃油經濟性 Helps improves
						fuel economy 3.提昇功率和性能 Increses Power and Performance 4.防止柴油產生氧化及油泥 Stops Diesel Oxidation &
						sludging 5.拔除水分 Picks Up Water 6.預防黑煙 Retards Black Smoke
					</p>
				</div>
				<div className="call-out">
					<h4>Feature 2</h4>
					<p>
						(( 紅卡 Ultra Fuel Booster )) ，燃油提效劑，汽、柴油通用
						每卡6顆包裝，每顆對應30公升，每卡對應180公升燃油。紅卡不論汽油、柴油都可用，汽油車添加尤佳，有以下所標示的綜合功能。 減少摩擦磨損 Reduces Friction & Wear
						幫助潤滑 Adds Lubrication 獲得最大的功率與性能 Maximizes Power & Performance 提升燃料穩定性 Stabilizes Fuel 提高燃油經濟性
						Helps Improve Fuel Economy 清潔積碳 Fights Carbon Deposits 減少排放量 Reduces Emissions
					</p>
				</div>
				<div className="call-out">
					<h4>Feature 3</h4>
					<p>
						(( 黑卡 Octane booster )) ，辛烷值提升劑，汽油車專用
						各位老闆，這是汽油車專用，您必須加98汽油才可以購買，加95汽油買這個來將辛烷值提升到98，還不如直接加98汽油，依現在的油價算比較省錢。
						1卡6顆包裝，每顆對應19公升，1卡對應114公升，油箱不用等到近空才能加油，反正每加19公升就可以投一顆，38公升就投2顆，57公升就投3顆，方便好用管子不沾油。
						簡單說，同一部車子加92、95、98汽油的扭力、馬力跟油耗表現，當然會有所不同，現代的行車電腦都會自動調整點火角度，以適用各種不同辛烷值的汽油。
						黑卡專門提升辛烷值，辛烷值提升以後可以更加減少爆震，點火角度再度進前，馬力扭力同步提升，油耗相對減少。
						這添加劑很簡單，有添加辛烷值就有提升，停止添加就停止提升，請注意每19公升添加1顆，原廠建議最多添加2顆，38公升最多添加4顆，57公升最多添加6顆，不宜過量提升辛烷值，要注意引擎壓縮比。
					</p>
				</div>
			</div>
			<div className="fixed-size-container">
				<div className="fixed-size">1</div>
				<div className="fixed-size">2</div>
				<div className="fixed-size">3</div>
				<div className="fixed-size">4</div>
				<div className="fixed-size">5</div>
				<div className="fixed-size">6</div>
			</div>
		</div>
	);
}

export default App;
