#-------------------------------------------------------------------------------
# SETUP
#-------------------------------------------------------------------------------

LOCAL := node_modules/.bin
ISTANBUL := node_modules/istanbul/lib/cli.js

# COLORS
ESC := \u001b[
CLOSE := $(ESC)39m
COLOR = $(ESC)$(1)$(2)$(CLOSE)
GREEN = $(call COLOR,32m,$(1))
BLUE = $(call COLOR,34m,$(1))
GRAY = $(call COLOR,90m,$(1))
BAR = $(call GRAY,┃)

.PHONY: \
  cover \
  coverage \
  deps \
  help \
  serve \
  test

#-------------------------------------------------------------------------------
# DEFAULT
#-------------------------------------------------------------------------------
default:
	@echo "tbd"

#-------------------------------------------------------------------------------
# TESTING
#-------------------------------------------------------------------------------

test:
	@$(LOCAL)/mocha

cover:
	@$(ISTANBUL) cover node_modules/mocha/bin/_mocha

coverage:
	@cat coverage/lcov.info | $(LOCAL)/lcov-summary

#-------------------------------------------------------------------------------
# DEVELOPMENT
#-------------------------------------------------------------------------------

deps:
	npm install

serve:
	@node bin/dev-server.js

#-------------------------------------------------------------------------------
# HELP
#-------------------------------------------------------------------------------
define HELP_TEXT

$(call GRAY,Available commands:)

  $(call BLUE,cover)    $(BAR) $(call GREEN,calculate test coverage)
  $(call BLUE,coverage) $(BAR) $(call GREEN,summary of last "cover")
  $(call BLUE,deps)     $(BAR) $(call GREEN,install dependencies)
  $(call BLUE,serve)    $(BAR) $(call GREEN,start development server)
  $(call BLUE,test)     $(BAR) $(call GREEN,run tests)
endef
export HELP_TEXT
help:
	@echo -e "$$HELP_TEXT"

# vim: noet ts=4 :
