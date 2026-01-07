function genererHoroscope() {
            const signes = {
                "Bélier": "Aujourd'hui, votre audace vous portera loin. Soyez prudent avec les impulsions.",
                "Taureau": "La stabilité est votre alliée. Profitez des plaisirs simples.",
                "Gémeaux": "Votre curiosité vous ouvrira de nouvelles portes. Communiquez !",
                "Cancer": "Les émotions sont à l'honneur. Prenez soin de vous.",
                "Lion": "Votre charisme brille. Montrez-vous sous votre meilleur jour.",
                "Vierge": "La précision est clé. Organisez vos projets.",
                "Balance": "Cherchez l'équilibre. Les relations s'harmonisent.",
                "Scorpion": "La transformation est en cours. Plongez en profondeur.",
                "Sagittaire": "L'aventure vous appelle. Explorez le monde.",
                "Capricorne": "La discipline paie. Avancez vers vos objectifs.",
                "Verseau": "L'innovation vous inspire. Pensez différemment.",
                "Poissons": "Votre intuition est forte. Écoutez votre cœur."
            };
            const signe = document.getElementById('signe').value;
            const text = signes[signe] || "Choisissez un signe pour voir votre horoscope.";
            document.getElementById('horoscope-text').textContent = text;
        }
        
        document.getElementById('consultation-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Merci de votre confiance! Nous reviendrons vers vous par Email <3');
        });