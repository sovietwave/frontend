const MODES = {
    "event": null,

	"day": {
        "title": "Дневной эфир",
		"subtitle": "#chillwave #dreamwave #sovietwave",
		"times": "7:00 — 19:00",
		"backs": [
			"/assets/sprites/day0.jpg",
			"/assets/sprites/day1.jpg",
			"/assets/sprites/day2.jpg",
			"/assets/sprites/day3.jpg",
			"/assets/sprites/day4.jpg",
			"/assets/sprites/day5.jpg"
        ],
	},

	"evening": {
        "title": "Вечерний эфир",
		"subtitle": "#synthpop #postpunk #sovietwave",
		"times": "19:00 — 0:00",
		"backs": [
			"/assets/sprites/evening0.jpg",
			"/assets/sprites/evening1.jpg",
			"/assets/sprites/evening2.jpg",
			"/assets/sprites/evening3.jpg",
			"/assets/sprites/evening4.jpg",
			"/assets/sprites/evening5.jpg",
			"/assets/sprites/evening6.png",
			"/assets/sprites/evening7.png",
		],
	},

	"night": {
        "title": "Ночной эфир",
		"subtitle": "#ambient #experimental #sovietwave",
		"times": "0:00 — 7:00",
		"backs": [
			"/assets/sprites/night0.jpg",
			"/assets/sprites/night1.jpg",
			"/assets/sprites/night2.jpg",
			"/assets/sprites/night3.jpg",
			"/assets/sprites/night4.jpg",
			"/assets/sprites/night5.jpg",
			"/assets/sprites/night7.png",
			"/assets/sprites/day6.png",
		],
	},

	"event1_space": {
        "title": "День Космонавтики",
		"subtitle": "#sovietwave",
		"times": "12 апреля",
		"backs": [
			"/assets/sprites/event0.jpg"
		],
    },
    
	"event2_ssw": {
		"title": "Советская советская волна",
		"subtitle": "#psychedelic #retro",
        "times": "20—21 ноября",
        "backs": [],
	},

	"event3_chillwave": {
		"title": "#chillwave",
		"subtitle": "#glofi #hypnagogic #dreamwave",
        "times": "1—2 декабря",
        "backs": [],
	}
};


class AirModeHandler {
    constructor (modeElementId, timesElementId, tagsElementId) {
        this.modeElement = $(modeElementId);
        this.timesElement = $(timesElementId);
        this.tagsElement = $(tagsElementId);

        console.log(this.getMode());
    }

    getMode() {
        return "";
    }
}