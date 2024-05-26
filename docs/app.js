document.addEventListener('DOMContentLoaded', () => {
    //these are currently pretty randomly choosen values, as I did not even try some yet.
    //these might be configurable in the future
    //there is some lost potential for synergies between stratagems that should add value
    const stratagems = [
		{ botvalue: 20, bugvalue: 15, heavy : 0, selected : false, dmgtype : 'single', name: 'HMG Emplacement', type: 'Other', enabled: true, imgSrc: 'assets/Bridge/HMG Emplacement.svg', category: 'bridge' },
		{ botvalue: 54, bugvalue: 58, heavy : 0, selected : false, dmgtype : 'util', name: 'Orbital EMS Strike', type: 'Bridge', enabled: true, imgSrc: 'assets/Bridge/Orbital EMS Strike.svg', category: 'bridge' },
		{ botvalue: 37, bugvalue: 95, heavy : 0, selected : false, dmgtype : 'aoe', name: 'Orbital Gas Strike', type: 'Bridge', enabled: true, imgSrc: 'assets/Bridge/Orbital Gas Strike.svg', category: 'bridge' },
		{ botvalue: 80, bugvalue: 52, heavy : 1, selected : false, dmgtype : 'single', name: 'Orbital Precision Strike', type: 'Bridge', enabled: true, imgSrc: 'assets/Bridge/Orbital Precision Strike.svg', category: 'bridge' },
		{ botvalue: 31, bugvalue: 31, heavy : 0, selected : false, dmgtype : 'util', name: 'Orbital Smoke Strike', type: 'Bridge', enabled: true, imgSrc: 'assets/Bridge/Orbital Smoke Strike.svg', category: 'bridge' },
		{ botvalue: 5, bugvalue: 5, heavy : 0, selected : false, dmgtype : 'none', name: 'Shield Generator Relay', type: 'Other', enabled: true, imgSrc: 'assets/Bridge/Shield Generator Relay.svg', category: 'bridge' },
		{ botvalue: 1, bugvalue: 50, heavy : 0, selected : false, dmgtype : 'aoe', name: 'Tesla Tower', type: 'Bridge', enabled: true, imgSrc: 'assets/Bridge/Tesla Tower.svg', category: 'bridge' },
		{ botvalue: 10, bugvalue: 10, heavy : 0, selected : false, dmgtype : 'util', name: 'Anti-Personnel Minefield', type: 'Engineering Bay', enabled: true, imgSrc: 'assets/Engineering Bay/Anti-Personnel Minefield.svg', category: 'engineering-bay' },
		{ botvalue: 0, bugvalue: 0, heavy : 1, selected : false, dmgtype : 'util', name: 'Anti-Tank Mines', type: 'Engineering Bay', enabled: false, imgSrc: 'assets/Engineering Bay/Anti-Tank Mines.svg', category: 'engineering-bay' },
		{ botvalue: 40, bugvalue: 90, heavy : 0, selected : false, dmgtype : 'aoe', hasBackpack: 0, name: 'Arc Thrower', type: 'Weapon', enabled: true, imgSrc: 'assets/Engineering Bay/Arc Thrower.svg', category: 'engineering-bay' },
		{ botvalue: 10, bugvalue: 0, heavy : 0, selected : false, dmgtype : 'none', name: 'Ballistic Shield Backpack', type: 'Backpack', enabled: true, imgSrc: 'assets/Engineering Bay/Ballistic Shield Backpack.svg', category: 'engineering-bay' },
		{ botvalue: 60, bugvalue: 50, heavy : 0, selected : false, dmgtype : 'aoe', hasBackpack: 0, name: 'Grenade Launcher', type: 'Weapon', enabled: true, imgSrc: 'assets/Engineering Bay/Grenade Launcher.svg', category: 'engineering-bay' },
		{ botvalue: 25, bugvalue: 60, heavy : 0, selected : false, dmgtype : 'single', name: 'Guard Dog Rover', type: 'Backpack', enabled: true, imgSrc: 'assets/Engineering Bay/Guard Dog Rover.svg', category: 'engineering-bay' },
		{ botvalue: 10, bugvalue: 15, heavy : 0, selected : false, dmgtype : 'util', name: 'Incendiary Mines', type: 'Engineering Bay', enabled: true, imgSrc: 'assets/Engineering Bay/Incendiary Mines.svg', category: 'engineering-bay' },
		{ botvalue: 70, bugvalue: 30, heavy : 0, selected : false, dmgtype : 'single', hasBackpack: 0, name: 'Laser Cannon', type: 'Weapon', enabled: true, imgSrc: 'assets/Engineering Bay/Laser Cannon.svg', category: 'engineering-bay' },
		{ botvalue: 80, bugvalue: 90, heavy : 1, selected : false, dmgtype : 'single', hasBackpack: 0, name: 'Quasar Cannon', type: 'Weapon', enabled: true, imgSrc: 'assets/Engineering Bay/Quasar Cannon.svg', category: 'engineering-bay' },
		{ botvalue: 85, bugvalue: 90, heavy : 0, selected : false, dmgtype : 'none', name: 'Shield Generator Pack', type: 'Backpack', enabled: true, imgSrc: 'assets/Engineering Bay/Shield Generator Pack.svg', category: 'engineering-bay' },
		{ botvalue: 80, bugvalue: 65, heavy : 0, selected : false, dmgtype : 'none', name: 'Supply Pack', type: 'Backpack', enabled: true, imgSrc: 'assets/Engineering Bay/Supply Pack.svg', category: 'engineering-bay' },
		{ botvalue: 70, bugvalue: 55, heavy : 1, selected : false, dmgtype : 'single', name: 'Eagle 110MM Rocket Pods', type: 'Hangar', enabled: true, imgSrc: 'assets/Hangar/Eagle 110MM Rocket Pods.svg', category: 'hangar' },
		{ botvalue: 85, bugvalue: 85, heavy : 1, selected : false, dmgtype : 'single', name: 'Eagle 500KG Bomb', type: 'Hangar', enabled: true, imgSrc: 'assets/Hangar/Eagle 500KG Bomb.svg', category: 'hangar' },
		{ botvalue: 100, bugvalue: 100, heavy : 1, selected : false, dmgtype : 'aoe', name: 'Eagle Airstrike', type: 'Hangar', enabled: true, imgSrc: 'assets/Hangar/Eagle Airstrike.svg', category: 'hangar' },
		{ botvalue: 50, bugvalue: 70, heavy : 0, selected : false, dmgtype : 'aoe', name: 'Eagle Cluster Bomb', type: 'Hangar', enabled: true, imgSrc: 'assets/Hangar/Eagle Cluster Bomb.svg', category: 'hangar' },
		{ botvalue: 40, bugvalue: 75, heavy : 0, selected : false, dmgtype : 'aoe', name: 'Eagle Napalm Airstrike', type: 'Hangar', enabled: true, imgSrc: 'assets/Hangar/Eagle Napalm Airstrike.svg', category: 'hangar' },
		{ botvalue: 20, bugvalue: 15, heavy : 0, selected : false, dmgtype : 'util', name: 'Eagle Smoke Strike', type: 'Hangar', enabled: true, imgSrc: 'assets/Hangar/Eagle Smoke Strike.svg', category: 'hangar' },
		{ botvalue: 30, bugvalue: 35, heavy : 0, selected : false, dmgtype : 'aoe', name: 'Eagle Strafing Run', type: 'Hangar', enabled: true, imgSrc: 'assets/Hangar/Eagle Strafing Run.svg', category: 'hangar' },
		{ botvalue: 45, bugvalue: 65, heavy : 0, selected : false, dmgtype : 'none', name: 'Jump Pack', type: 'Backpack', enabled: true, imgSrc: 'assets/Hangar/Jump Pack.svg', category: 'hangar' },
		{ botvalue: 15, bugvalue: 15, heavy : 0, selected : false, dmgtype : 'aoe', name: 'Orbital 120MM HE Barrage', type: 'Orbital Cannons', enabled: true, imgSrc: 'assets/Orbital Cannons/Orbital 120MM HE Barrage.svg', category: 'orbital-cannons' },
		{ botvalue: 40, bugvalue: 40, heavy : 1, selected : false, dmgtype : 'aoe', name: 'Orbital 380MM HE Barrage', type: 'Orbital Cannons', enabled: true, imgSrc: 'assets/Orbital Cannons/Orbital 380MM HE Barrage.svg', category: 'orbital-cannons' },
		{ botvalue: 15, bugvalue: 15, heavy : 0, selected : false, dmgtype : 'aoe', name: 'Orbital Airburst Strike', type: 'Orbital Cannons', enabled: true, imgSrc: 'assets/Orbital Cannons/Orbital Airburst Strike.svg', category: 'orbital-cannons' },
		{ botvalue: 20, bugvalue: 35, heavy : 0, selected : false, dmgtype : 'aoe', name: 'Orbital Gatling Barrage', type: 'Orbital Cannons', enabled: true, imgSrc: 'assets/Orbital Cannons/Orbital Gatling Barrage.svg', category: 'orbital-cannons' },
		{ botvalue: 95, bugvalue: 95, heavy : 1, selected : false, dmgtype : 'single', name: 'Orbital Laser', type: 'Orbital Cannons', enabled: true, imgSrc: 'assets/Orbital Cannons/Orbital Laser.svg', category: 'orbital-cannons' },
		{ botvalue: 75, bugvalue: 95, heavy : 1, selected : false, dmgtype : 'single', name: 'Orbital Railcannon Strike', type: 'Orbital Cannons', enabled: true, imgSrc: 'assets/Orbital Cannons/Orbital Railcannon Strike.svg', category: 'orbital-cannons' },
		{ botvalue: 30, bugvalue: 15, heavy : 0, selected : false, dmgtype : 'aoe', name: 'Orbital Walking Barrage', type: 'Orbital Cannons', enabled: true, imgSrc: 'assets/Orbital Cannons/Orbital Walking Barrage.svg', category: 'orbital-cannons' },
		{ botvalue: 25, bugvalue: 30, heavy : 0, selected : false, dmgtype : 'aoe', hasBackpack: 1, name: 'Airburst Rocket Launcher', type: 'Weapon', enabled: true, imgSrc: 'assets/Patriotic Administration Center/Airburst Rocket Launcher.svg', category: 'administration' },
		{ botvalue: 100, bugvalue: 30, heavy : 0, selected : false, dmgtype : 'single', hasBackpack: 0, name: 'Anti-Materiel Rifle', type: 'Weapon', enabled: true, imgSrc: 'assets/Patriotic Administration Center/Anti-Materiel Rifle.svg', category: 'administration' },
		{ botvalue: 100, bugvalue: 70, heavy : 0, selected : false, dmgtype : 'single', hasBackpack: 1, name: 'Autocannon', type: 'Weapon', enabled: true, imgSrc: 'assets/Patriotic Administration Center/Autocannon.svg', category: 'administration' },
		{ botvalue: 60, bugvalue: 95, heavy : 1, selected : false, dmgtype : 'single', hasBackpack: 0, name: 'Expendable Anti-Tank', type: 'Weapon', enabled: true, imgSrc: 'assets/Patriotic Administration Center/Expendable Anti-Tank.svg', category: 'administration' },
		{ botvalue: 0, bugvalue: 80, heavy : 0, selected : false, dmgtype : 'aoe', hasBackpack: 0, name: 'Flamethrower', type: 'Weapon', enabled: true, imgSrc: 'assets/Patriotic Administration Center/Flamethrower.svg', category: 'administration' },
		{ botvalue: 25, bugvalue: 15, heavy : 0, selected : false, dmgtype : 'single', hasBackpack: 0, name: 'Heavy Machine Gun', type: 'Weapon', enabled: true, imgSrc: 'assets/Patriotic Administration Center/Heavy Machine Gun.svg', category: 'administration' },
		{ botvalue: 25, bugvalue: 50, heavy : 0, selected : false, dmgtype : 'single', hasBackpack: 0, name: 'Machine Gun', type: 'Weapon', enabled: true, imgSrc: 'assets/Patriotic Administration Center/Machine Gun.svg', category: 'administration' },
		{ botvalue: 60, bugvalue: 50, heavy : 0, selected : false, dmgtype : 'single', hasBackpack: 0, name: 'Railgun', type: 'Weapon', enabled: true, imgSrc: 'assets/Patriotic Administration Center/Railgun.svg', category: 'administration' },
		{ botvalue: 80, bugvalue: 80, heavy : 1, selected : false, dmgtype : 'single', hasBackpack: 1, name: 'Recoilless Rifle', type: 'Weapon', enabled: true, imgSrc: 'assets/Patriotic Administration Center/Recoilless Rifle.svg', category: 'administration' },
		{ botvalue: 85, bugvalue: 70, heavy : 1, selected : false, dmgtype : 'single', hasBackpack: 1, name: 'Spear', type: 'Weapon', enabled: true, imgSrc: 'assets/Patriotic Administration Center/Spear.svg', category: 'administration' },
		{ botvalue: 55, bugvalue: 65, heavy : 0, selected : false, dmgtype : 'single', hasBackpack: 0, name: 'Stalwart', type: 'Weapon', enabled: true, imgSrc: 'assets/Patriotic Administration Center/Stalwart.svg', category: 'administration' },
		{ botvalue: 75, bugvalue: 75, heavy : 1, selected : false, dmgtype : 'single', name: 'Autocannon Sentry', type: 'Tower', enabled: true, imgSrc: 'assets/Robotics Workshop/Autocannon Sentry.svg', category: 'workshop' },
		{ botvalue: 75, bugvalue: 75, heavy : 0, selected : false, dmgtype : 'util', name: 'EMS Mortar Sentry', type: 'Tower', enabled: true, imgSrc: 'assets/Robotics Workshop/EMS Mortar Sentry.svg', category: 'workshop' },
		{ botvalue: 50, bugvalue: 85, heavy : 0, selected : false, dmgtype : 'aoe', name: 'Gatling Sentry', type: 'Tower', enabled: true, imgSrc: 'assets/Robotics Workshop/Gatling Sentry.svg', category: 'workshop' },
		{ botvalue: 55, bugvalue: 35, heavy : 0, selected : false, dmgtype : 'single', name: 'Guard Dog', type: 'Backpack', enabled: true, imgSrc: 'assets/Robotics Workshop/Guard Dog.svg', category: 'workshop' },
		{ botvalue: 0, bugvalue: 5, heavy : 0, selected : false, dmgtype : 'single', name: 'Machine Gun Sentry', type: 'Tower', enabled: false, imgSrc: 'assets/Robotics Workshop/Machine Gun Sentry.svg', category: 'workshop' },
		{ botvalue: 80, bugvalue: 50, heavy : 0, selected : false, dmgtype : 'aoe', name: 'Mortar Sentry', type: 'Tower', enabled: true, imgSrc: 'assets/Robotics Workshop/Mortar Sentry.svg', category: 'workshop' },
		{ botvalue: 35, bugvalue: 25, heavy : 1, selected : false, dmgtype : 'single', name: 'Patriot Exosuit', type: 'Mech', enabled: true, imgSrc: 'assets/Robotics Workshop/Patriot Exosuit.svg', category: 'workshop' },
		{ botvalue: 30, bugvalue: 30, heavy : 1, selected : false, dmgtype : 'single', name: 'Rocket Sentry', type: 'Tower', enabled: true, imgSrc: 'assets/Robotics Workshop/Rocket Sentry.svg', category: 'workshop' },
		{ botvalue: 65, bugvalue: 35, heavy : 1, selected : false, dmgtype : 'single', name: 'Emancipator Exosuit', type: 'Mech', enabled: true, imgSrc: 'assets/Robotics Workshop/Emancipator Exosuit.svg', category: 'workshop' },
    ];
    

    const randomizeButton = document.getElementById('randomizeButton');
    const loadoutDisplay = document.getElementById('loadoutDisplay');
    const enemyTypeSelect = document.getElementById('enemyType');
    const bodyElement = document.body;

    const filterTab = document.getElementById('filterTab');
    const selectTab = document.getElementById('selectTab');
    const filterView = document.getElementById('filterView');
    const selectView = document.getElementById('selectView');

    // Function to switch views
    function switchView(view) {
        if (view === 'filter') {
            filterTab.classList.add('active');
            selectTab.classList.remove('active');
            filterView.classList.add('active');
            selectView.classList.remove('active');
        } else {
            filterTab.classList.remove('active');
            selectTab.classList.add('active');
            filterView.classList.remove('active');
            selectView.classList.add('active');
        }
    }

    // Event listeners for view buttons
    filterTab.addEventListener('click', () => switchView('filter'));
    selectTab.addEventListener('click', () => switchView('select'));

    // Function to render the stratagem list for filtering
    function renderFilterView() {
        const categories = {
            bridge: document.querySelector('#fbridge ul'),
            'engineering-bay': document.querySelector('#fengineering-bay ul'),
            hangar: document.querySelector('#fhangar ul'),
            'orbital-cannons': document.querySelector('#forbital-cannons ul'),
            workshop: document.querySelector('#fworkshop ul'),
            administration: document.querySelector('#fadministration ul')
        };

        for (const key in categories) {
            categories[key].innerHTML = '';
        }

        stratagems.forEach(stratagem => {
            const li = document.createElement('li');
            li.innerHTML = `<img src="${stratagem.imgSrc}" alt="${stratagem.name}"> ${stratagem.name}`;
            li.classList.toggle('enabled', stratagem.enabled);
            li.addEventListener('click', () => {
                stratagem.enabled = !stratagem.enabled;
                li.classList.toggle('enabled', stratagem.enabled);
            });
            categories[stratagem.category].appendChild(li);
        });
    }

    // Function to render the stratagem list for selecting
    function renderSelectView() {
        const categories = {
            bridge: document.querySelector('#bridge ul'),
            'engineering-bay': document.querySelector('#engineering-bay ul'),
            hangar: document.querySelector('#hangar ul'),
            'orbital-cannons': document.querySelector('#orbital-cannons ul'),
            workshop: document.querySelector('#workshop ul'),
            administration: document.querySelector('#administration ul')
        };

        for (const key in categories) {
            categories[key].innerHTML = '';
        }

        stratagems.forEach(stratagem => {
            const li = document.createElement('li');
            li.innerHTML = `<img src="${stratagem.imgSrc}" alt="${stratagem.name}"> ${stratagem.name}`;
            //li.classList.toggle('selected', stratagem.selected);
            li.addEventListener('click', () => {
                stratagem.selected = !stratagem.selected;
                li.classList.toggle('selected', stratagem.selected);
                const loadout = stratagems.filter(s => s.selected);
                loadoutDisplay.innerHTML = loadout.map(s => `<img src="${s.imgSrc}" alt="${s.name}" title="${s.name}">`).join('');
            });
            categories[stratagem.category].appendChild(li);
        });
    }
    
     // Function to get random loadout
     function getRandomLoadout() {
        
        let tries = 0;

        while (tries < 5000)
        {
            tries++;

            const enabledStratagems = stratagems.filter(s => s.enabled);
            const guaranteedWeapon = document.getElementById('guaranteedWeapon').checked;
            const guaranteedBackpack = document.getElementById('guaranteedBackpack').checked;
            const maxWeapons = parseInt(document.getElementById('maxWeapons').value, 10);
            const maxBackpacks = parseInt(document.getElementById('maxBackpacks').value, 10);
            const fairnessScale = parseInt(document.getElementById('fairnessScale').value, 10);
            const stratagemsToRoll = parseInt(document.getElementById('stratagemCount').value, 10);

            let loadout = stratagems.filter(s => s.selected);
            let fairnessoffset = 0;
            loadout.forEach( s => {
                fairnessoffset += (100 - Math.min(s.botvalue, s.bugvalue));
            })

            let remainingStratagems = enabledStratagems.filter(s => !loadout.includes(s));        
            let weaponCount = loadout.filter(s => s.type === 'Weapon').length;
            if (weaponCount >= maxWeapons){
                remainingStratagems = remainingStratagems.filter(s => s.type !== 'Weapon');
            }
            let backpackCount = loadout.filter(s => s.type === 'Backpack').length;
            if (backpackCount >= maxBackpacks){
                remainingStratagems = remainingStratagems.filter(s => s.type !== 'Backpack');
            }
            
            //only one Mech allowed
            let mechCount = loadout.filter(s => s.type === 'Mech').length;
            if (mechCount >= 1){
                remainingStratagems = remainingStratagems.filter(s => s.type !== 'Mech');
            }
            
            if (guaranteedWeapon) {
                const weapons = remainingStratagems.filter(s => s.type === 'Weapon');
                if (weapons.length > 0) {
                    const weapon = weapons[Math.floor(Math.random() * weapons.length)];
                    loadout.push(weapon);
                    remainingStratagems = remainingStratagems.filter(s => s.name !== weapon.name);
                }
            }
            if (guaranteedBackpack) {
                const backpacks = remainingStratagems.filter(s => s.type === 'Backpack');
                const weaponBackpack = loadout.filter(s => s.type === 'Weapon' && s.hasBackpack === 1);
                if (backpacks.length > 0 && weaponBackpack.length === 0) {
                    const backpack = backpacks[Math.floor(Math.random() * backpacks.length)];
                    loadout.push(backpack);
                    remainingStratagems = remainingStratagems.filter(s => s.name !== backpack.name);
                }
            }
        
            // Randomly add remaining stratagems to the loadout
            while (loadout.length < stratagemsToRoll && remainingStratagems.length > 0) {
                weaponCount = loadout.filter(s => s.type === 'Weapon').length;
                backpackCount = loadout.filter(s => s.type === 'Backpack').length + loadout.filter(s => s.hasBackpack === 1).length;
                const randomIndex = Math.floor(Math.random() * remainingStratagems.length);
                const strat = remainingStratagems[randomIndex];
                if (strat.type === 'Weapon' && strat.hasBackpack === 1 && backpackCount >= maxBackpacks) {
                    remainingStratagems = remainingStratagems.filter(s => s.name !== strat.name);
                }
                else if (strat.type === 'Weapon' && weaponCount >= maxWeapons) {
                    remainingStratagems = remainingStratagems.filter(s => s.type !== 'Weapon');
                } else if (strat.type === 'Backpack' && backpackCount >= maxBackpacks) {
                    remainingStratagems = remainingStratagems.filter(s => s.type !== 'Backpack');
                } else if (strat.type === 'Mech') {
                    loadout.push(strat);
                    remainingStratagems = remainingStratagems.filter(s => s.type !== 'Mech');
                } else {
                    loadout.push(strat);
                    remainingStratagems.splice(randomIndex, 1);
                }
            }

            let botsum = 0;
            let bugsum = 0;
            loadout.forEach( s => {
                botsum += s.botvalue;
                bugsum += s.bugvalue;
            })

            //yeah magic numbers! 40 is just choosen as a place where you want to be able to beat almost anything 
            if(fairnessScale > 40 && (loadout.filter(s => s.heavy === 1).length < 1 || loadout.filter(s => s.dmgtype === 'aoe').length < 1)){
                ; //reroll
            }
            else if(document.getElementById('enemyType').value === 'bugs' && (bugsum+fairnessoffset) < (stratagemsToRoll*0.85*fairnessScale)){
                ; //reroll
            }
            else if(document.getElementById('enemyType').value === 'bots' && (botsum+fairnessoffset) < (stratagemsToRoll*0.85*fairnessScale)){
                ; //reroll
            }
            //yikes:
            else if(tries === 4999){
                return loadout;
            }
            else{
                return loadout;
            }
        }

        //dont care currently about a smarter algorithm that does not need to reroll
        //a better way would be to favor stratagems that are close to the fainess value and update the goal(fairness) after each choise
        //-> if the first was bad favor better next
        return []; //<-- why do I exist ಥ_ಥ
    }    

    // Function to update background image from nothing to nothing
    function updateBackgroundImage() {
        const enemyType = enemyTypeSelect.value;
        //disabled because I dont know what I want displayed
        if (enemyType === 'bots' && false) {
            bodyElement.style.backgroundImage = "url('assets/backgrounds/bots.jpg')";
        } else if (enemyType === 'bugs' && false) {
            bodyElement.style.backgroundImage = "url('assets/backgrounds/bugs.jpg')";
        }
        else{
            //default background
            ;//bodyElement.style.backgroundImage = "url('assets/backgrounds/default.png')";
        }
    }

    randomizeButton.addEventListener('click', () => {
        const loadout = getRandomLoadout();
        loadoutDisplay.innerHTML = loadout.map(s => `<img src="${s.imgSrc}" alt="${s.name}" title="${s.name}">`).join('');
    });
    
    enemyType.addEventListener('change', updateBackgroundImage);

    // Initial rendering
    switchView('filter');
    renderFilterView();
    renderSelectView();
    
    // Collapsible sections logic
    document.querySelectorAll('.collapsible').forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
