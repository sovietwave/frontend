class AnimationHandler {
    constructor(togglerIdPanelIdMapping, togglerClassId, brightOverlayId, naviId, naviTogglerId, animationSpeed) {
        this.togglerClass = $(togglerClassId);
        this.togglers = $.map(togglerIdPanelIdMapping, function(value, key) { return $(key) });

        this.panels = $.map(togglerIdPanelIdMapping, function(value, key) { return $(value) });
        this.activePanel = null;

        this.naviToggler = $(naviTogglerId);
        this.navi = $(naviId),

            this.brightOverlay = $(brightOverlayId);

        this.ANIMATION_SPEED = animationSpeed;

        this.setClickCallbacks();
    }

    setClickCallbacks() {
        var this_ = this;

        for (const [togglerId, panelId] of Object.entries(togglerIdPanelIdMapping)) {
            $(togglerId).click(function() {
                this_.togglePanel(togglerId, panelId);
            });
        }

        this.naviToggler.click(function() {
            this_.toggleNavi();
        });

        this.brightOverlay.click(function() {
            this.hidePanels();
        });
    }

    hideSmooth(element, property, speed = this.ANIMATION_SPEED) {
        element.animate(
            property,
            speed,
            function() {
                $(this).hide();
            }
        );
    }

    showSmooth(element, property, speed = this.ANIMATION_SPEED) {
        element.animate(property, speed).show();
    }

    highlightToggler(toggler) {
        toggler.css("background-color", "rgb(225, 222, 128, 0.3)");
        toggler.css("color", "rgb(225, 255, 255, 1)");
    }

    unhighlightToggler(toggler) {
        toggler.css("background-color", "rgb(0, 0, 0, 0)");
        toggler.css("color", "rgb(225, 255, 255)");
    }

    toggleNavi() {
        var anyPanelIsVisible = false;
        for (var panelIndex = 0; panelIndex < this.panels.length; panelIndex++) {
            if (this.panels[panelIndex].is(":visible")) {
                anyPanelIsVisible = true;
                break;
            }
        }

        if (anyPanelIsVisible) {
            this.naviToggler.show();
        } else {
            if (this.navi.is(':visible')) {
                this.hideSmooth(this.navi, { opacity: "0" }, this.ANIMATION_SPEED);

                this.naviToggler.animate({
                    height: '100',
                }, 100);
            } else {
                this.showSmooth(this.navi, { opacity: "1" }, this.ANIMATION_SPEED + 200);

                this.naviToggler.animate({
                    height: '60',
                }, 100);
            }
        }
    }

    togglePanel(togglerId, panelId) {
        var panel = $(panelId),
            toggler = $(togglerId);

        this.activePanel = panel;

        if (panel.is(':visible')) {
            this.hideSmooth(panel, { left: "-450" });
            this.hideSmooth(this.brightOverlay, { opacity: "0" });

            this.unhighlightToggler(this.togglerClass);
            this.unhighlightToggler(toggler);
        } else {
            // hide all panels
            for (var panelIndex = 0; panelIndex < this.panels.length; panelIndex++) {
                var panel_to_close = this.panels[panelIndex];

                if (panel_to_close[0].id != panel[0].id) {
                    this.hideSmooth(panel_to_close, { left: "-450" });
                }
            }

            this.showSmooth(panel, { left: "0" });
            this.showSmooth(this.brightOverlay, { opacity: "0.2" });

            this.unhighlightToggler(this.togglerClass);
            this.highlightToggler(toggler);
        }
    }

    hidePanels() {
        hideSmooth(this.activePanel, { left: "-450" });
        hideSmooth(this.brightOverlay, { opacity: "0" });
        unhighlightToggler(this.togglerClass);
    }
}