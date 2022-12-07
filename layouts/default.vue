<template>
    <div>
        <header>
            <div class="temp">
                <a href="https://www.kayak.co.uk/2020-Best-Small-Hotel.2632503.113.awards" target="_blank">
                    <img src="~/assets/images/award.png" class="award" />
                </a>
                <div>
                    <Transition name="slide-open">
                        <div class="desktop-navbar" v-if="!open" ref="desktopNavbar">
                            <div class="navbar-header" @click="(open = true)">
                                <div class="navbar-toggle">
                                    <div class="navbar-btn">
                                        <div class="navbar-btn-bars">
                                            <div class="bars"></div>
                                            <div class="bars"></div>
                                            <div class="bars"></div>
                                        </div>
                                        <div class="navbar-btn-label">
                                            <span class="navbar-btn-label-menu">Menu</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="navbar-header reservation" @click="scrollToTarget">
                                <div class="navbar-toggle">
                                    <div class="navbar-btn">
                                        <div class="navbar-btn-bars">
                                            <div class="bars"></div>
                                            <div class="bars"></div>
                                            <div class="bars"></div>
                                        </div>
                                        <div class="navbar-btn-label">
                                            <span class="navbar-btn-label-menu">Book Now</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                    <Transition name="slide-up">
                        <div class="navbar-header-mobile" v-if="!open">
                            <a href="/" class="logo">
                                <img src="~/assets/images/jannata.png" alt="" width="70">
                            </a>
                            <div class="navbar-btn-bars" style="cursor:pointer" @click="(open = true)">
                                <div class="bars"></div>
                                <div class="bars"></div>
                                <div class="bars"></div>
                            </div>
                        </div>
                    </Transition>
                    <div class="navbar-header close" v-if="open" key="2" @click="(open = false)">
                        <div class="navbar-toggle">
                            <div class="navbar-btn">
                                <div class="navbar-btn-bars">
                                    <div class="bars"></div>
                                    <div class="bars"></div>
                                    <div class="bars"></div>
                                </div>
                                <div class="navbar-btn-label">
                                    <span class="navbar-btn-label-menu">Close</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script setup lang="ts">
const open = ref(false);
const scrollTarget = ref();
const desktopNavbar = ref();
const scrollToTarget = () => {
    scrollTarget?.value?.scrollIntoView({
        behavior: "smooth"
    })
}
</script>

<style lang="scss">
.temp {
    background-image: url('~/temp/lauren.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 1024px;
    overflow-x: hidden;

    &-2 {
        background-image: url('~/temp/blond-lauren.jpg');
    }
}

.award {
    position: fixed;
    top: 15px;
    right: 75px;
    z-index: 9999;
    width: 80px;
    height: 80px;

    @include for-tablet {
        width: 60px;
        height: 60px;
        top: auto;
        bottom: 30px;
        right: 15px;
    }
}

.navbar {
    &-header {
        position: fixed;
        width: 80px;
        height: 110px;
        right: -20px;
        background-color: #ffffff;
        cursor: pointer;
        z-index: 70;
        transition: all .7s cubic-bezier(.19, 1, .22, 1);
        top: 30%;
        border: none;
        transform: translateX(0) translateY(-100%);
        color: #000000;

        &:hover {
            transform: translateX(-10px) translateY(-100%);

            .navbar-btn-bars {
                .bars {
                    width: 30px;

                    &:nth-child(2),
                    &:nth-child(3) {
                        width: 0;
                    }
                }
            }
        }

        &.close {
            transform: translateX(0) translateY(-100%);
            color: #ffffff;
            background-color: transparent;

            .bars {
                background-color: white;
            }
        }

        &.reservation {
            transform: translateX(0) translateY(0);
            background-color: #5f5c68;
            color: #ffffff;
            height: 150px;

            .bars {
                right: 2px;

                &:nth-child(2) {
                    transform: translateX(-5px) translateY(0) rotate(45deg);
                }

                &:nth-child(3) {
                    transform: translateX(-5px) translateY(0) rotate(-45deg);
                }

                &:nth-child(2),
                &:nth-child(3) {
                    width: 20px;
                }
            }

            .navbar-btn {
                bottom: 110px;

                &-bars {
                    .bars {
                        background-color: #ffffff;

                        &:first-child {
                            right: 2px;
                            width: 0;
                        }
                    }
                }
            }

            &:hover {
                transform: translateX(-10px) translateY(0);
                background-color: #679334;

                .navbar-btn-bars {
                    .bars {
                        width: 20px;

                        &:first-child {
                            width: 30px;
                        }

                        &:nth-child(2) {
                            transform: translateX(2px) translateY(0) rotate(45deg);
                        }

                        &:nth-child(3) {
                            transform: translateX(2px) translateY(0) rotate(-45deg);
                        }
                    }
                }
            }

            .navbar-btn-label {
                top: 60px;
                transform: translateX(22px) rotate(-90deg);

                &-menu {
                    display: block;
                    width: 70px;
                }
            }
        }

        &-mobile {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 80px;
            background-color: #323037;
            z-index: 999;

            .logo {
                width: 70px;
                display: block;
                margin: 10px auto;
            }

            .navbar-btn-bars {
                position: absolute;
                right: 30px;
                top: 30px;
                width: 65px;
                height: 15px;
                overflow: hidden;

                & * {
                    background-color: #fff;
                }
            }
        }

        @include for-phone {
            display: none;

            &-mobile {
                display: block;
            }

            &.close {
                display: block;
            }
        }
    }

    &-btn {
        position: absolute;
        width: 29px;
        height: 14px;
        margin: 0;
        transition: top .5s cubic-bezier(.19, 1, .22, 1);
        top: auto;
        right: 35px;
        bottom: 75px;
        left: auto;

        &-bars {
            position: absolute;
            right: 0;
            width: 65px;
            height: 15px;
            overflow: hidden;

            .bars {
                &:first-child {
                    top: 7px;
                }

                &:nth-child(3) {
                    top: 14px;
                }
            }
        }

        &-label {
            position: absolute;
            top: 40px;
            right: 0;
            font: 400 9px/1.3 Open Sans, sans-serif;
            letter-spacing: 2px;
            text-transform: uppercase;
            transform: translateX(10px) rotate(-90deg);

            &-menu {
                display: block;
                width: 40px;
            }
        }
    }
}

.bars {
    z-index: 9999;
    position: absolute;
    top: 0;
    right: 0;
    width: 25px;
    height: 1px;
    background-color: #000000;
    transition: all .7s cubic-bezier(.19, 1, .22, 1);
}

.slide {
    &-open {
        &-enter-active {
            transition: all .3s ease;
        }

        &-leave-active {
            transition: all 0.8s ease;
        }

        &-enter-from,
        &-leave-to {
            right: -100px;
            opacity: 0;
        }
    }

    &-up {
        &-enter-active {
            transition: all .3s ease;
        }

        &-leave-active {
            transition: all 0.8s ease;
        }

        &-enter-from,
        &-leave-to {
            top: -100px;
        }
    }
}
</style>