const MODES = {
    "day": {
        "title": "Дневной эфир",
        "tags": "#chillwave #dreamwave #sovietwave",
        // HOURS MUST CONTAINS 2 DIGITS!!!
        "startTime": "07:00",
        "endTime": "19:00",
        "glowTheme": false,
        "backs": [
            "/assets/sprites/day0.jpg",
            "/assets/sprites/day1.jpg",
            "/assets/sprites/day2.jpg",
            "/assets/sprites/day3.jpg",
            "/assets/sprites/day4.jpg",
            "/assets/sprites/day5.jpg",
            "/assets/sprites/day6.png",
        ],
    },

    "evening": {
        "title": "Вечерний эфир",
        "tags": "#synthpop #postpunk #sovietwave",
        // HOURS MUST CONTAINS 2 DIGITS!!!
        "startTime": "19:00",
        "endTime": "00:00",
        "glowTheme": true,
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
        "tags": "#ambient #experimental #sovietwave",
        // HOURS MUST CONTAINS 2 DIGITS!!!
        "startTime": "00:00",
        "endTime": "07:00",
        "glowTheme": true,
        "backs": [
            "/assets/sprites/night0.jpg",
            "/assets/sprites/night1.jpg",
            "/assets/sprites/night2.jpg",
            "/assets/sprites/night3.jpg",
            "/assets/sprites/night4.jpg",
            "/assets/sprites/night5.jpg",
        ],
    }
};

// set to null if there is no events now
const EVENT = null;

const GLOW_MAP = {
    ".panel-title": ".panel-title-glow",
    "#navi": ".navi-glow",
}


class AirModeHandler {
    constructor(modeElementId, timesElementId, tagsElementId, backSwithcerId) {
        this.modeElement = $(modeElementId);
        this.timesElement = $(timesElementId);
        this.tagsElement = $(tagsElementId);
        this.backSwithcer = $(backSwithcerId);

        this.backQueue = []; // a queue to show at list 3 different backs in a row

        this.updateMode();

        var this_ = this;

        setInterval(function() {
            this_.updateMode();;
        }, 1 * 60 * 1000);

        this.setBackground(false);

        this.backSwithcer.click(function() {
            this_.setBackground(true);
        });
    }

    updateMode() {
        if (EVENT) {
            this.mode = EVENT

            this.setAirInfo(mode["time"]);
        } else {
            this.mode = this.getMode();
            if (this.mode["glowTheme"]) {
                this.enableGlowTheme();
            } else {
                this.disableGlowTheme();
            }

            this.setAirInfo(this.mode["startTime"] + " — " + this.mode["endTime"] + " МСК");
        }

        if (this.mode["backs"].length == 1) {
            this.UNIQE_BACK_COUNT = 0;
        } else if (this.mode["backs"].length <= 3) {
            this.UNIQE_BACK_COUNT = this.mode["backs"].length - 1;
        } else {
            this.UNIQE_BACK_COUNT = 3;
        }
    }

    getMode() {
        var currentTime = new Date().toLocaleString("ru-RU", { "timeStyle": "short", "hour": "2-digit" }),
            mode = null;

        for (const [modeName, options] of Object.entries(MODES)) {
            if (stringTimeInGap(currentTime, options["startTime"], options["endTime"])) {
                mode = options;
                break;
            }
        }

        return mode;
    }

    setAirInfo(times) {
        const title = this.mode["title"],
            tags = this.mode["tags"];

        this.modeElement.text(title);
        this.tagsElement.text(tags);
        this.timesElement.text(times);
    }

    setBackground(switchMode) {
        var randomSource = this.mode["backs"][random(0, this.mode["backs"].length - 1)];

        if (switchMode) {
            while (this.backQueue.includes(randomSource)) {
                randomSource = this.mode["backs"][random(0, this.mode["backs"].length - 1)];
            }

            if (this.backQueue.length >= this.UNIQE_BACK_COUNT) {
                this.backQueue.shift();
            }
        }

        $("body").css("background-image", "url({randomSource})".format({ "randomSource": randomSource }));

        this.backQueue.push(randomSource);
    }

    enableGlowTheme() {
        for (const [elementId, glowId] of Object.entries(GLOW_MAP)) {
            $(elementId).addClass(glowId.slice(1, glowId.length));
        }
    }

    disableGlowTheme() {
        for (const [elementId, glowId] of Object.entries(GLOW_MAP)) {
            $(elementId).removeClass(glowId);
        }
    }
}