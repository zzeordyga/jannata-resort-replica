<template>
    <div>
        <Transition name="slide-open">
            <div class="navbar-header" id="mainNav" @click="(open = true)" v-if="!open">
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
        </Transition>
        <Transition name="slide-open">
            <div class="navbar-header reservation" id="bookNow" @click="scrollToTarget" v-if="!open">
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
        <Transition name="slide-close">
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
        </Transition>
        <Transition name="slide-navbar">
            <div id="navContent" class="navbar-content" v-if="open">
                <div class="q-container container-inner">
                    <div class="language-container">
                        <a href="/en/homepage" class="active">
                            EN
                        </a>
                        <a href="/fr/homepage">
                            FR
                        </a>
                        <a href="/ru/domashnyaya-stranitsa">
                            RU
                        </a>
                        <a href="/jp/homepage">
                            JP
                        </a>
                        <a href="/de/homepage">
                            DE
                        </a>
                    </div>
                    <div class="menu-screen">
                        <div ref="screenItem" id="screenItem"
                            :style="{ backgroundImage: 'url(' + currentImageUrl + ')' }">
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <ul class="main-nav">
                                <li v-for="(item, i) in navigationItems" key="i"
                                    @mouseover="replaceBackgroundImage(item.url)"
                                    @mouseleave="replaceBackgroundImage('')">
                                    <span class="q-split">
                                        <span class="q-split-wrap">
                                            <a :href="item.href">{{ item.name }}</a>
                                        </span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div class="column">
                            <h5>Accommodations</h5>
                            <ul class="main-nav">
                                <li v-for="(item, i) in secondaryNavigationItems" key="i"
                                    @mouseover="replaceBackgroundImage(item.url)"
                                    @mouseleave="replaceBackgroundImage('')">
                                    <span class="q-split">
                                        <span class="q-split-wrap">
                                            <a :href="item.href">{{ item.name }}</a>
                                        </span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'

const open = ref(false)
const screenItem = ref()
const currentImageUrl = ref('')

const navigationItems = [
    {
        name: 'Homepage',
        href: '/en/ homepage',
        url: 'https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5e65fe109dae8c14dd70f7e0/pictures/hover/15839890897111/big/497791fc-9913-4222-aab1-04a242ab0905.jpg'
    },
    {
        name: 'Our Story',
        href: '/en/our-story',
        url: 'https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5e65fe109dae8c14dd70f7e0/pictures/hover/15839891402451/big/d1276b64-27bc-4c45-96fd-6b509414815f.jpg'
    },
    {
        name: 'Exclusive Deals',
        href: '/en/exclusive-deals',
        url: 'https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5e65fe109dae8c14dd70f7e0/pictures/hover/15839891949331/big/ee593781-7b4a-4913-9a34-c8089d48881f.jpg'
    },
    {
        name: 'Spa & Yoga',
        href: '/en/spa-yoga',
        url: 'https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5e65fe109dae8c14dd70f7e0/pictures/hover/15955727747142/big/Spa.jpeg'
    },
    {
        name: 'Amateras Dining',
        href: '/en/amateras-dining',
        url: 'https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5e65fe109dae8c14dd70f7e0/pictures/hover/15839892950111/big/dabfeefe-8d8a-4807-9461-6935887f6443.jpg'
    },
    {
        name: 'Wedding',
        href: '/en/wedding',
        url: 'https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5e65fe109dae8c14dd70f7e0/pictures/hover/15839893417411/big/26c85850-dc44-4091-9a28-7e19929e5a19.jpg'
    },
    {
        name: 'Ubud & Beyond',
        href: '/en/ubud-beyond',
        url: 'https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5e65fe109dae8c14dd70f7e0/pictures/hover/15839893862141/big/8210cc2b-1ed4-4e3c-923c-06e146ded6ac.jpg'
    },
    {
        name: 'Location & Contact',
        href: '/en/location-contact',
        url: 'https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5e65fe109dae8c14dd70f7e0/pictures/hover/15839894353531/big/01d07a63-a15d-41ba-b37c-666780d38f8e.jpg'
    },
]

const secondaryNavigationItems = [
    {
        name: 'Pool Villa',
        href: '/en/accommodation/pool-villa',
        url: 'https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5e65fe109dae8c14dd70f7e0/pictures/hover/15846171336191/big/b13efd11-4c1d-4dca-85d3-c27153b0fcf8.jpg'
    },
    {
        name: 'Deluxe Suite',
        href: '/en/accommodation/deluxe-suite',
        url: 'https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5e65fe109dae8c14dd70f7e0/pictures/hover/15955727741741/big/Deluxe.jpeg'
    },
    {
        name: 'Superior Room',
        href: '/en/accommodation/superior-room',
        url: 'https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5e65fe109dae8c14dd70f7e0/pictures/hover/15846172989141/big/65babf25-94c1-4149-bbe4-63843d40cabc.jpg'
    },
]

const replaceBackgroundImage = (url: string) => {
    if (url.length != 0) {
        currentImageUrl.value = url
        gsap.to(screenItem.value, {
            opacity: 1,
            duration: 0.5,
            ease: 'ease-in'
        })
    }
    else {
        gsap.to(screenItem.value, {
            opacity: 0,
            duration: 0.1,
            ease: 'ease-in',
        })

    }
}
</script>

<style lang="scss" scoped>
.navbar {
    &-header {
        position: fixed;
        right: -20px;
        width: 80px;
        height: 110px;
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

    &-content {
        transform: matrix(1, 0, 0, 1, 0, 0);
        background: #323037;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;

        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        width: 80%;

        .language-container {
            position: absolute;
            text-transform: uppercase;
            top: 60px;

            @include for-tablet {
                top: 20px;
                right: 10px;
            }

            a {
                font-size: 12px !important;
                line-height: 1.8;
                font-family: Open Sans, sans-serif;
                font-weight: 400;
                text-decoration: none;
                color: #d8d6e2;
                padding: 0 5px;

                &:hover,
                &.active {
                    color: #679334
                }
            }
        }

        .menu-screen {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            width: 60%;
            height: 70%;
            max-height: 500px;
            background: rgba(0, 0, 0, .1);

            #screenItem {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                opacity: 0;
                z-index: -1;
                background: no-repeat 50%;
                background-size: cover;
            }
        }

        @include for-phone {
            width: 100%;
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
            transition: all 2s cubic-bezier(1, -0.99, .38, 1.06);
        }

        &-leave-active {
            transition: all .3s ease;
        }

        &-enter-from,
        &-leave-to {
            right: -200px;
        }
    }

    &-close {
        &-enter-active {
            transition: all 0.5s ease;
        }

        &-leave-active {
            transition: all .3s ease;
        }

        &-enter-from,
        &-leave-to {
            right: -200px;
        }
    }

    &-up {
        &-enter-active {
            transition: all 2s cubic-bezier(1, -0.99, .38, 1.06);
        }

        &-leave-active {
            transition: all .8s ease;
        }

        &-enter-from,
        &-leave-to {
            top: -200px;
        }
    }

    &-navbar {
        &-enter-active {
            transition: all 0.5s ease;
        }

        &-leave-active {
            transition: all .3s ease;
        }

        &-enter-from,
        &-leave-to {
            transform: translate(100%, 0) matrix(1, 0, 0, 1, 0, 0);
        }
    }
}

.columns {
    display: flex;

    @include for-tablet {
        display: block;
    }

    h5 {
        color: #d8d6e2;
        opacity: .3;
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        font-size: 14px;
        line-height: 2.5;

        @include for-tablet {
            margin-top: 0px;
        }
    }

    .main-nav {
        margin: 0;
        padding: 0;

        ul,
        li,
        ol {
            list-style: none;

            .q-split {
                display: block;
                overflow: hidden;

                &-wrap {
                    display: block;
                }
            }

            a {
                text-decoration: none;
                display: block;
                font: 400 20px/2 serif;
                line-height: 2;
                color: #d8d6e2;
                text-transform: uppercase;
                letter-spacing: 3px;
                transition: all .2s ease;
                position: relative;


                &:hover {
                    color: #ffffff;
                    transform: translateX(10px);

                    &:before {
                        width: 80%;
                    }
                }

                &:before {
                    content: "";
                    display: block;
                    position: absolute;
                    top: 50%;
                    left: -10px;
                    width: 0;
                    height: 2px;
                    background: #679334;
                    transition: all .5s cubic-bezier(.86, 0, .07, 1);
                    z-index: -1;
                }
            }
        }
    }
}
</style>