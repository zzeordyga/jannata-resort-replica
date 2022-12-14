<template>
    <footer class="section footer">
        <div class="q-container container-inner">
            <div class="columns">
                <div class="column column-left">
                    <div class="inner">

                    </div>
                </div>
                <div class="column column-right">
                    <div class="inner">
                        <h4>Our Address</h4>
                        <p>Jl. Rsi Markandya, Br. Bangkiang Sidem Desa Keliki, Tegalalang – Gianyar, Bali 80561
                            Indonesia</p>
                        <ul>
                            <li>Mobile: <a href="tel:+6285237998077">+62 852
                                    37998077</a>
                            </li>
                            <li>Phone: <a href="tel:+623614792778">+62 361
                                    4792778</a>
                            </li>
                            <li>Fax: <a href="tel:+623614792778">+62 361
                                    4792778</a>
                            </li>
                        </ul>
                        <p>Email: <a href="mailto:reservation@jannataresort.com">reservation@jannataresort.com</a>
                        </p>
                        <p>Email: <a href="mailto:reservation@jannataresort.com">reservation@jannataresort.com</a>
                        </p>
                        <div class="bottom on-mobile">
                            <nav class="social-network">
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/jannataresort" target="_blank">
                                            <i class="icon icon-facebook">
                                            </i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/jannata_resort" target="_blank">
                                            <i class="icon icon-twitter">
                                            </i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/jannataresort/" target="_blank">
                                            <i class="icon icon-instagram">
                                            </i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.tripadvisor.com/Hotel_Review-g297701-d10059822-Reviews-Jannata_Resort_Spa-Ubud_Bali.html"
                                            target="_blank">
                                            <i class="icon icon-tripadvisor">
                                            </i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <p class="copyright">
                                <span>© <label id="year_copy">2018</label> <a href="#">Jannata Bali
                                        Luxury Villas &amp;
                                        Resort</a>
                                </span> <br> <span>Website by <a href="https://fleava.com"
                                        title="Fleava — Bali Digital Agency" target="_blank">Fleava</a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.footer {
    background: linear-gradient(90deg, #679334, #bbd531);
    padding: 100px 0;

    @include for-tablet {
        background: linear-gradient(0deg, #679334, #bbd531);
    }

    & .on-mobile {
        display: none;

        @include for-tablet {
            display: block;
        }
    }

    & .copyright {
        color: #fff;
        font-size: 11px;
        letter-spacing: .5px;
        margin: 25px 0 0;
    }

    & .social-network {
        ul {
            display: flex;
        }
    }
}

.column {
    &-left {
        @include for-tablet {
            margin-bottom: 50px;
        }
    }

    &-right {
        @include for-tablet {
            color: #fff;
            line-height: 20px;
        }

        & h4 {
            letter-spacing: 3px;
            text-transform: uppercase;
            font-weight: 600;
            margin-top: 0;
        }

        & ul {
            margin: 35px 0 0;
            padding: 0;
        }
    }
}

// remove footer because not used
.inner {
    display: none;
}
</style>