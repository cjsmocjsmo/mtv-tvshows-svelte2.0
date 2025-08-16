#!/bin/bash

# Star Wars
sed -i "s/const command = ;/const command = \`mandalarians\${currentSeason}\`;/" "src/routes/TVShows/tvstarwars/tvSeasonsMandalorian/+page.svelte"
sed -i "s/const command = ;/const command = \`bobbafetts\${currentSeason}\`;/" "src/routes/TVShows/tvstarwars/tvSeasonsBobbaFett/+page.svelte"  
sed -i "s/const command = ;/const command = \`ahsokas\${currentSeason}\`;/" "src/routes/TVShows/tvstarwars/tvSeasonsAhsoka/+page.svelte"
sed -i "s/const command = ;/const command = \`obiwans\${currentSeason}\`;/" "src/routes/TVShows/tvstarwars/tvSeasonsObiWan/+page.svelte"
sed -i "s/const command = ;/const command = \`visionss\${currentSeason}\`;/" "src/routes/TVShows/tvstarwars/tvSeasonsVisions/+page.svelte"
sed -i "s/const command = ;/const command = \`talesofthejedis\${currentSeason}\`;/" "src/routes/TVShows/tvstarwars/tvSeasonsTalesOfTheJedi/+page.svelte"
sed -i "s/const command = ;/const command = \`talesoftheempires\${currentSeason}\`;/" "src/routes/TVShows/tvstarwars/tvSeasonsTalesOfTheEmpire/+page.svelte"
sed -i "s/const command = ;/const command = \`talesoftheunderworlds\${currentSeason}\`;/" "src/routes/TVShows/tvstarwars/tvSeasonsTalesOfTheUnderworld/+page.svelte"
sed -i "s/const command = ;/const command = \`skeletoncrews\${currentSeason}\`;/" "src/routes/TVShows/tvstarwars/tvSeasonsSkeletonCrew/+page.svelte"

# MCU
sed -i "s/const command = ;/const command = \`lokis\${currentSeason}\`;/" "src/routes/TVShows/tvmcu/tvSeasonsLoki/+page.svelte"
sed -i "s/const command = ;/const command = \`wandavisions\${currentSeason}\`;/" "src/routes/TVShows/tvmcu/tvSeasonsWandavision/+page.svelte"
sed -i "s/const command = ;/const command = \`falconwintersoldiers\${currentSeason}\`;/" "src/routes/TVShows/tvmcu/tvSeasonsFalconWinterSoldier/+page.svelte"
sed -i "s/const command = ;/const command = \`hawkeyes\${currentSeason}\`;/" "src/routes/TVShows/tvmcu/tvSeasonsHawkeye/+page.svelte"
sed -i "s/const command = ;/const command = \`moonknights\${currentSeason}\`;/" "src/routes/TVShows/tvmcu/tvSeasonsMoonKnight/+page.svelte"
sed -i "s/const command = ;/const command = \`shehulks\${currentSeason}\`;/" "src/routes/TVShows/tvmcu/tvSeasonsSheHulk/+page.svelte"
sed -i "s/const command = ;/const command = \`secretinvasions\${currentSeason}\`;/" "src/routes/TVShows/tvmcu/tvSeasonsSecretInvasion/+page.svelte"
sed -i "s/const command = ;/const command = \`ironhearts\${currentSeason}\`;/" "src/routes/TVShows/tvmcu/tvSeasonsIronHeart/+page.svelte"
sed -i "s/const command = ;/const command = \`iamgroots\${currentSeason}\`;/" "src/routes/TVShows/tvmcu/tvSeasonsIAmGroot/+page.svelte"

# Sci-Fi
sed -i "s/const command = ;/const command = \`foundations\${currentSeason}\`;/" "src/routes/TVShows/tvscifi/tvSeasonsFoundation/+page.svelte"
sed -i "s/const command = ;/const command = \`silos\${currentSeason}\`;/" "src/routes/TVShows/tvscifi/tvSeasonsSilo/+page.svelte"
sed -i "s/const command = ;/const command = \`fallouts\${currentSeason}\`;/" "src/routes/TVShows/tvscifi/tvSeasonsFallout/+page.svelte"
sed -i "s/const command = ;/const command = \`alteredcarbons\${currentSeason}\`;/" "src/routes/TVShows/tvscifi/tvSeasonsAlteredCarbon/+page.svelte"
sed -i "s/const command = ;/const command = \`forallmankinds\${currentSeason}\`;/" "src/routes/TVShows/tvscifi/tvSeasonsForAllManKind/+page.svelte"
sed -i "s/const command = ;/const command = \`orvilles\${currentSeason}\`;/" "src/routes/TVShows/tvscifi/tvSeasonsOrville/+page.svelte"
sed -i "s/const command = ;/const command = \`lostinspaces\${currentSeason}\`;/" "src/routes/TVShows/tvscifi/tvSeasonsLostInSpace/+page.svelte"
sed -i "s/const command = ;/const command = \`halos\${currentSeason}\`;/" "src/routes/TVShows/tvscifi/tvSeasonsHalo/+page.svelte"
sed -i "s/const command = ;/const command = \`raisedbywolvess\${currentSeason}\`;/" "src/routes/TVShows/tvscifi/tvSeasonsRaisedByWolves/+page.svelte"
sed -i "s/const command = ;/const command = \`thelastofuss\${currentSeason}\`;/" "src/routes/TVShows/tvscifi/tvSeasonsTheLastOfUs/+page.svelte"
sed -i "s/const command = ;/const command = \`nightskys\${currentSeason}\`;/" "src/routes/TVShows/tvscifi/tvSeasonsNightSky/+page.svelte"
sed -i "s/const command = ;/const command = \`cowboybebops\${currentSeason}\`;/" "src/routes/TVShows/tvscifi/tvSeasonsCowboyBebop/+page.svelte"
sed -i "s/const command = ;/const command = \`monarchlegacyofmonsterss\${currentSeason}\`;/" "src/routes/TVShows/tvscifi/tvSeasonsMonarchLegacyOfMonsters/+page.svelte"

# Fantasy
sed -i "s/const command = ;/const command = \`houseofthedragons\${currentSeason}\`;/" "src/routes/TVShows/tvfantasy/tvSeasonsHouseOfTheDragon/+page.svelte"
sed -i "s/const command = ;/const command = \`ringsofpowers\${currentSeason}\`;/" "src/routes/TVShows/tvfantasy/tvSeasonsRingsOfPower/+page.svelte"
sed -i "s/const command = ;/const command = \`wheeloftimes\${currentSeason}\`;/" "src/routes/TVShows/tvfantasy/tvSeasonsWheelOfTime/+page.svelte"
sed -i "s/const command = ;/const command = \`wednesdays\${currentSeason}\`;/" "src/routes/TVShows/tvfantasy/tvSeasonsWednesday/+page.svelte"

# Action
sed -i "s/const command = ;/const command = \`moblands\${currentSeason}\`;/" "src/routes/TVShows/tvaction/tvSeasonsMobLand/+page.svelte"
sed -i "s/const command = ;/const command = \`thecontinentals\${currentSeason}\`;/" "src/routes/TVShows/tvaction/tvSeasonTheContinental/+page.svelte"
sed -i "s/const command = ;/const command = \`shoguns\${currentSeason}\`;/" "src/routes/TVShows/tvaction/tvSeasonsShogun/+page.svelte"

# Comedy
sed -i "s/const command = ;/const command = \`fuubars\${currentSeason}\`;/" "src/routes/TVShows/tvcomedy/tvSeasonsFuuBar/+page.svelte"

# Science  
sed -i "s/const command = ;/const command = \`columbias\${currentSeason}\`;/" "src/routes/TVShows/tvscience/tvSeasonsColumbia/+page.svelte"
sed -i "s/const command = ;/const command = \`prehistoricplanets\${currentSeason}\`;/" "src/routes/TVShows/tvscience/tvSeasonsPreHistoricPlanet/+page.svelte"

# Western
sed -i "s/const command = ;/const command = \`hfords\${currentSeason}\`;/" "src/routes/TVShows/tvwesterns/tvSeasonsHFord/+page.svelte"

echo "All command syntax errors fixed!"
