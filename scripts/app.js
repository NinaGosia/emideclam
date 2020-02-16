const messages = {
    pl: {
        navigation: {
            homePage: "Strona główna",
            gallery: "Galeria",
            aboutMe: "O mnie",
            comic: "Komiks",
            media: "Media",
            collaboration: "Współpraca",
            language: "PL/EN"
        },
        aboutMe: {
            title: "O mnie",
            header1: "Emilia „Emi de Clam” Marlewska",
            header2: "Gdańsk, Polska",
            smallText: "Grafik komputerowy, animatorka zajęć kreatywnych. <br />Absolwentka Polsko-Japońskiej Akademii Technik Komputerowych w Gdańsku.",
            text: "Jestem autorką komiksów „Cwaniara” oraz „Goth & Pastel”.<br /> Od 2017 roku zajmuję się edycją graficzną komiksów.Na początku w wydawnictwie Yumegari, a od 2018 w wydawnictwie Hanami.<br /> Tytuły przy których pracowałam to między innymi: „Vampires Library”, „Siesta”, „Chłopaki z dwudziestego wieku”, „Czy chcesz zostać starą panną ?” czy też „Saga Winlandzka”.<br /> Prowadzę zajęcia kreatywne z komiksu dla młodzieży.Moje warsztaty odbyły się już między innymi w Bibliotece pod Żabką oraz w Bibliotece z Pasją w Gdyni.<br /> Jestem również liderem na zajęciach „Szkicownik” odbywających się w Domu Sąsiedzkim Pałacu w Gdańsku.<br /> ",
        },
        gallery: {
            title: "Galeria",
            showMore: "Więcej",
            showLess: "Mniej",
        },
        comic: {
            title: "Komiks",
        },
        media: {
            title: "Media",
            prefixReview: "Recenzja komiksu",
            cwaniara: {
                no1: "Cwaniara: Bursztynowy Amulet",
            },
            sufixBestselerki: "od Bestselerek!!!",
            sufixMatkaPrzelozona: "od Matki Przełożonej!!!",
            sufixGeekKochaNajmocniej: "od Geek kocha najmocniej!!!",
            sufixPopbookownik: "od Popbookownik!!!",
            showMore: "Więcej",
            showLess: "Mniej"
        },
        collaboration: {
            title: "Współpraca",
        },
        socialMedia: {
            patreon: "Patreon: Slyboots",
            facebook: "Facebook",
            twitter: "Twitter",
            email: "Email",
            tapas: "Tapas",
            instagram: "Instagram",
        },
        footer: {
            allRights: "Wszelkie prawa zastrzeżone",
        },
        popover: {
            copyEmailSuccess: "Adres email został skopiowany!",
            copyEmailFail: "Nie udało się skopiować adres email :(",
            copyEmailIssue: "Możesz się ze mną skontaktować przez ",
        }
    },
    en: {
        navigation: {
            homePage: "Home page",
            gallery: "Gallery",
            aboutMe: "About me",
            comic: "Comic",
            media: "Media",
            collaboration: "Partnerships",
            language: "PL/EN"
        },
        aboutMe: {
            title: "About me",
            header1: "Emilia „Emi de Clam” Marlewska",
            header2: "Gdańsk, Polska",
            smallText: "Computer graphic designer, organiser of creative activities<br />Graduate of Polish-Japanese Academy of Information Technology in Gdańsk",
            text: "I am the author of “Slyboots” and “Goth & Pastel” comics.<br />I have been working in graphic editing of comics since 2017, at first at Yumegari publishing company. Then, since 2018, I have been working at Hanami publishing company.<br />Titles I have worked on include: “Vampires Library”, “Siesta”, “20th Century Boys”, “Will I Be Single Forever?” and “Vinland Saga”.<br />I also hold creative workshops in comics for youth. My classes have already taken place in Biblioteka pod Żabką and Biblioteka z Pasją in Gdynia among others.<br />I am also a leader in “Szkicownik” classes, which take place in Dom Sąsiedzki w Pałacu in Gdańsk.<br />",
        },
        gallery: {
            title: "Gallery",
            showMore: "More",
            showLess: "Less",
        },
        comic: {
            title: "Comic",
        },
        media: {
            title: "Media",
            prefixReview: "Comic review",
            cwaniara: {
                no1: "Slyboots: The Amber Amulet",
            },
            sufixBestselerki: "by Bestselerki!!! (in Polish only)",
            sufixMatkaPrzelozona: "by `Matka Przełożona`!!! (in Polish only))",
            sufixGeekKochaNajmocniej: "by `Geek kocha najmocniej`!!! (in Polish only)",
            sufixPopbookownik: "by `Popbookownik`!!! (in Polish only)",
            showMore: "More",
            showLess: "Less"
        },
        collaboration: {
            title: "Partnerships",
        },
        socialMedia: {
            patreon: "Patreon: Slyboots",
            facebook: "Facebook",
            twitter: "Twitter",
            email: "Email",
            tapas: "Tapas",
            instagram: "Instagram",
        },
        footer: {
            allRights: "All rights reserved",
        },
        popover: {
            copyEmailSuccess: "You copied email adress!",
            copyEmailFail: "There was a failure with coping email adress :(",
            copyEmailIssue: "You can contact me by "
        }
    }
}

  // Create VueI18n instance with options
  const i18n = new VueI18n({
    locale: 'pl', // set locale
    messages, // set locale messages
  })

var app = new Vue({
    i18n,
    el: "#app",
    data: {
        isNotPolish: false,
        isShrinked: false,
        galleryIsCollapsed: true,
        mediaIsCollapsed: true,
        galleryHead: {
            1: ["01", "02"], 
            2: ["03", "04", "05"], 
            3: ["06", "07", "08", "09"]
        },
        galleryMore: [
            "10", "11", "12", "13", "14", 
            "16", "17", "18", "19", "20", 
            "21", "22", "23", "24", "Kanut",
            "Lindsey_Stirling_2", "Morgyn Ember"
        ]
    },
    methods: {
        handleScroll (event) {
            var top  = window.pageYOffset || document.documentElement.scrollTop;
            this.isShrinked = top > 0;
        },
        copyToClipboard (code) {
            var self = this;
            var popoverElem = $('#copy-email');
            let codeToCopy = document.querySelector('#code-to-copy')
            codeToCopy.value = code;
            codeToCopy.setAttribute('type', 'text');
            codeToCopy.select();
            try {
                var msg = document.execCommand('copy') ? self.$t('popover.copyEmailSuccess') : self.$t('popover.copyEmailSuccess');
            } catch (err) {
                var msg = this.$t('popover.copyEmailIssue') + 'emiliamarlewska@gmail.com';
            }

            popoverElem.popover({
                content: function () {
                    return msg;
                }
            });
            popoverElem.popover('show');
            setTimeout(function () {
                popoverElem.popover('dispose');
            }, 2000);

            /* unselect the range */
            codeToCopy.setAttribute('type', 'hidden');
            window.getSelection().removeAllRanges();
        },
        toggleLanguage() {
            this.isNotPolish = !this.isNotPolish;
            i18n.locale = (this.isNotPolish) ? "en" : "pl";
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    }
})
