var app = new Vue({
    el: "#app",
        data: {
            navigation: {
                homePage: "Strona główna",
                gallery: "Galeria",
                aboutMe: "O mnie",
                comic: "Komiks",
                media: "Media",
                collaboration: "Współpraca",
            },
            aboutMe: {
                title: "O mnie",
                header1: "Emilia „Emi de Clam” Marlewska",
                header2: "Gdańsk, Polska",
                smallText: "Grafik komputerowy, animatorka zajęć kreatywnych. <br />Absolwentka Polsko-Japońskiej Akademii Technik Komputerowych w Gdańsku.",
                text: "Jestem autorką komiksów „Cwaniara” oraz „Goth & Pastel”.<br /> Od 2017 roku zajmuję się edycją graficzną komiksów.Na początku w wydawnictwie Yumegari, a od 2018 w wydawnictwie Hanami.<br /> Tytuły przy których pracowałam to między innymi: „Vampires Library”, „Siesta”, „Chłopaki z dwudziestego wieku”, „Czy chcesz zostać starą panną ?” czy też „Saga Winlandzka”.<br /> Prowadzę zajęcia kreatywne z komiksu dla młodzieży.Moje warsztaty odbyły się już między innymi w Bibliotece pod Żabką oraz w Bibliotece z Pasją w Gdyni.<br /> Jestem również liderem na zajęciach „Szkicownik” odbywających się w Domu Sąsiedzkim Pałacu w Gdańsku.<br /> "
            },
            gallery: {
                title: "Galeria",
                showMore: "Więcej",
            },
            comic: {
                title: "Komiks",
            },
            media: {
                title: "Media",
            },
            collaboration: {
                title: "Współpraca",
            },
            socialMedia: {
                patreon: "Patreon: Slyboots",
                facebook: "Facebook",
                twitter: "Twitter",
                email: "Email"
            },
            footer: {
                allRights: "Wszelkie prawa zastrzeżone"
            }
        }
})
