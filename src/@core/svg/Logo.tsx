// React Imports
import type { SVGAttributes } from 'react'

const Logo = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg width="11em" height="64px" viewBox="0 0 515 149" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M22.8498 145.567C28.9025 147.856 35.426 149 42.4203 149C50.8941 149 58.4264 147.25 65.0171 143.749C71.6079 140.249 76.7191 135.335 80.3507 129.007C84.1168 122.814 85.9999 115.678 85.9999 107.6V4C80.0817 4 75.7775 5.00975 73.0874 7.02925C70.5318 8.91411 69.254 11.7414 69.254 15.5111L73.2892 20.5599L72.4822 21.3677C63.6048 9.78923 52.5754 4 39.3939 4C32.1306 4 25.4726 5.48096 19.4199 8.44289C13.5017 11.4048 8.79399 15.5785 5.29686 20.9638C1.93423 26.2145 0.25293 32.273 0.25293 39.1393V71.6532C0.25293 82.1546 3.88457 90.6365 11.1478 97.0989C18.5456 103.427 28.0282 106.591 39.5957 106.591C45.5139 106.591 51.3649 105.244 57.1486 102.552C61.8058 100.433 65.8383 97.8552 69.2461 94.8192C68.8879 94.8626 68.4951 94.886 68.0644 94.886C64.077 94.5445 60.1141 93.9606 56.1976 93.1376V58.5044H58.876C59.3693 58.5044 59.8424 58.3085 60.1913 57.9597C60.5401 57.6108 60.736 57.1377 60.736 56.6444V50.7296C62.0702 50.2877 63.2033 49.3851 63.9325 48.1837C64.6617 46.9822 64.9392 45.5604 64.7153 44.1729C64.4915 42.7854 63.7809 41.523 62.711 40.6118C61.641 39.7005 60.2815 39.2001 58.876 39.2001C57.4706 39.2001 56.1111 39.7005 55.0411 40.6118C53.9711 41.523 53.2606 42.7854 53.0367 44.1729C52.8129 45.5604 53.0904 46.9822 53.8196 48.1837C54.5488 49.3851 55.6819 50.2877 57.016 50.7296V54.8216H54.2632C53.7699 54.8216 53.2968 55.0176 52.948 55.3664C52.5992 55.7152 52.4032 56.1883 52.4032 56.6816V92.3564C50.5145 91.8844 48.6519 91.3132 46.8232 90.6452V39.5696C47.8709 39.2712 48.8142 38.6857 49.5466 37.8793C50.279 37.0729 50.7712 36.0778 50.9678 35.0063C51.1643 33.9348 51.0572 32.8297 50.6587 31.8159C50.2601 30.8021 49.586 29.92 48.7124 29.2692C47.8388 28.6184 46.8007 28.2248 45.7152 28.1331C44.6297 28.0413 43.5402 28.2549 42.5698 28.7498C41.5994 29.2447 40.7867 30.0012 40.2236 30.9337C39.6605 31.8662 39.3694 32.9376 39.3832 34.0268C39.3703 35.2138 39.7194 36.3766 40.384 37.3602C41.0486 38.3438 41.9971 39.1015 43.1032 39.5324V89.12C42.4012 88.7665 41.7293 88.3559 41.0944 87.8924C39.9054 87.0274 38.8195 86.0289 37.858 84.9164V56.6444C37.858 56.1511 37.6621 55.678 37.3133 55.3292C36.9644 54.9804 36.4913 54.7844 35.998 54.7844H31.5712V50.6924C32.8847 50.2512 33.9985 49.3573 34.7137 48.1705C35.4288 46.9837 35.6987 45.5812 35.4751 44.2138C35.2515 42.8463 34.5491 41.6029 33.4932 40.7056C32.4373 39.8084 31.0969 39.3157 29.7112 39.3157C28.3256 39.3157 26.9851 39.8084 25.9293 40.7056C24.8734 41.6029 24.1709 42.8463 23.9474 44.2138C23.7238 45.5812 23.9937 46.9837 24.7088 48.1705C25.424 49.3573 26.5378 50.2512 27.8512 50.6924V56.6444C27.8512 57.1377 28.0472 57.6108 28.396 57.9597C28.7448 58.3085 29.2179 58.5044 29.7112 58.5044H34.324V79.8572C34.0264 79.4108 33.7289 78.9272 33.5056 78.518C33.2048 78.1493 32.943 77.7504 32.7244 77.3276C33.2775 88.6467 32.0034 91.0859 31.5461 91.9613L31.534 91.9844C31.3704 92.2754 31.1329 92.518 30.8455 92.6879C30.5582 92.8577 30.2311 92.9487 29.8973 92.9516C29.5862 92.9487 29.2803 92.8722 29.0044 92.7284C28.5767 92.4855 28.26 92.0859 28.1212 91.614C27.9824 91.1421 28.0323 90.6347 28.2604 90.1988C28.6324 89.5664 29.5996 86.6648 28.8556 75.3188C24.1722 72.7113 20.267 68.9045 17.5409 64.2891C14.8149 59.6737 13.366 54.416 13.3432 49.0556C13.3432 41.0049 16.5414 33.284 22.2341 27.5913C27.9268 21.8986 35.6478 18.7004 43.6984 18.7004C51.7491 18.7004 59.4701 21.8986 65.1628 27.5913C70.8555 33.284 74.0536 41.0049 74.0536 49.0556C74.1147 50.1088 74.1147 51.1645 74.0536 52.2176L83.4652 68.5856C83.7106 69.0029 83.8399 69.4781 83.8399 69.962C83.8399 70.446 83.7106 70.9212 83.4652 71.3384C83.2226 71.7663 82.8711 72.1224 82.4465 72.3707C82.0219 72.6189 81.5391 72.7505 81.0472 72.752H72.8633V91.352C72.8633 91.8646 72.771 92.5213 72.4027 93.1292L72.4822 93.2618C71.5406 94.6082 70.1283 96.0891 68.2452 97.7047V109.418C68.2452 126.112 59.6369 134.46 42.4203 134.46C34.619 134.46 28.3645 132.575 23.6568 128.805C19.0836 125.17 16.6625 120.188 16.3935 113.861C12.3584 113.861 9.13026 114.669 6.70917 116.284C4.42258 117.9 3.2793 120.458 3.2793 123.958C3.2793 128.401 5.02786 132.507 8.52499 136.277C12.0221 140.182 16.797 143.278 22.8498 145.567Z" fill="#01AFF4"/>
    <path d="M143.4 55.6C135.933 55.6 129.733 57.8666 124.8 62.4C119.867 66.8 117.4 72.2 117.4 78.6V131C117.4 135.4 115.933 138.667 113 140.8C110.2 142.8 105.867 143.8 99.9999 143.8V55C99.9999 45.1333 105.6 40.2 116.8 40.2V52.4C114.667 54.6666 113.2 56.6666 112.4 58.4L113.2 59.2C121.733 46.5333 132.4 40.2 145.2 40.2C150 40.2 153.667 41.4 156.2 43.8C158.733 46.0666 160 48.8666 160 52.2C160 54.6 159.4 56.7333 158.2 58.6C154.467 56.6 149.533 55.6 143.4 55.6Z" fill="#5E676B"/>
    <path d="M195.27 143.8C183.804 143.8 174.537 140.733 167.47 134.6C160.537 128.467 157.07 120.4 157.07 110.4C157.07 100.267 160.737 92.1333 168.07 86C175.404 79.7333 185.07 76.6 197.07 76.6C209.87 76.6 220.404 81.1333 228.67 90.2L229.47 89.4C228.004 87.8 226.337 86.1333 224.47 84.4V76C224.47 69.2 222.337 63.9333 218.07 60.2C213.804 56.4666 207.737 54.6 199.87 54.6C185.87 54.6 175.87 60.1333 169.87 71.2C167.737 70.1333 165.937 68.7333 164.47 67C163.137 65.1333 162.47 63.2666 162.47 61.4C162.47 57.8 164.27 54.4 167.87 51.2C171.47 47.8666 176.204 45.2 182.07 43.2C188.07 41.2 194.337 40.2 200.87 40.2C213.537 40.2 223.47 43.3333 230.67 49.6C238.004 55.8666 241.67 64.5333 241.67 75.6V130.4C241.67 135.067 240.337 138.467 237.67 140.6C235.004 142.733 230.804 143.8 225.07 143.8V134.4C227.87 131.467 229.404 129.733 229.67 129.2L228.87 128.4C220.204 138.667 209.004 143.8 195.27 143.8ZM198.27 130C206.537 130 213.004 128.267 217.67 124.8C222.47 121.333 224.87 116.533 224.87 110.4C224.87 104.267 222.537 99.4 217.87 95.8C213.204 92.2 206.804 90.4 198.67 90.4C191.07 90.4 185.07 92.2 180.67 95.8C176.404 99.2666 174.27 104.133 174.27 110.4C174.27 116.667 176.337 121.533 180.47 125C184.737 128.333 190.67 130 198.27 130Z" fill="#5E676B"/>
    <path d="M295.311 143.8C283.844 143.8 274.511 140.667 267.311 134.4C260.244 128 256.711 119.533 256.711 109V74.8C256.711 68 258.378 62 261.711 56.8C265.044 51.4666 269.644 47.4 275.511 44.6C281.511 41.6666 288.378 40.2 296.111 40.2C302.378 40.2 308.178 41.5333 313.511 44.2C318.844 46.7333 323.511 50.1333 327.511 54.4L328.111 53.4C327.178 52.0666 325.778 50.6 323.911 49V13.8C323.911 9.39996 325.378 6.06662 328.311 3.79995C331.244 1.39995 335.644 0.199951 341.511 0.199951V129.6C341.511 134 340.178 137.467 337.511 140C334.978 142.533 330.844 143.8 325.111 143.8V132.6C326.978 130.2 328.244 128.467 328.911 127.4L328.311 126.6C324.044 131.933 319.311 136.133 314.111 139.2C308.911 142.267 302.644 143.8 295.311 143.8ZM299.111 128.4C306.178 128.4 312.111 126.6 316.911 123C321.711 119.267 324.111 114.667 324.111 109.2V74.6C324.111 69.2666 321.844 64.8 317.311 61.2C312.778 57.4666 306.644 55.6 298.911 55.6C291.044 55.6 284.911 57.4 280.511 61C276.244 64.4666 274.111 69.3333 274.111 75.6V108.2C274.111 114.733 276.244 119.733 280.511 123.2C284.911 126.667 291.111 128.4 299.111 128.4Z" fill="#5E676B"/>
    <path d="M399.653 143.8C391.52 143.8 384.253 142.267 377.853 139.2C371.453 136 366.453 131.667 362.853 126.2C359.253 120.6 357.453 114.333 357.453 107.4V77.8C357.453 70.7333 359.32 64.3333 363.053 58.6C366.92 52.8666 372.053 48.4 378.453 45.2C384.986 41.8666 392.053 40.2 399.653 40.2C407.253 40.2 414.186 41.8 420.453 45C426.853 48.2 431.853 52.6 435.453 58.2C439.186 63.8 441.053 70.1333 441.053 77.2V90C441.053 92.1333 440.253 93.9333 438.653 95.4C437.053 96.8666 435.12 97.6 432.853 97.6H374.453V106.6C374.453 113.4 376.586 118.867 380.853 123C385.253 127.133 391.52 129.2 399.653 129.2C407.786 129.2 413.986 127.4 418.253 123.8C422.52 120.2 424.653 115.333 424.653 109.2C428.653 108.933 431.986 109.733 434.653 111.6C437.453 113.333 438.853 115.933 438.853 119.4C438.853 123.667 436.986 127.667 433.253 131.4C429.653 135.133 424.853 138.133 418.853 140.4C412.853 142.667 406.453 143.8 399.653 143.8ZM424.853 84V77.2C424.853 70.5333 422.52 65.1333 417.853 61C413.32 56.7333 407.253 54.6 399.653 54.6C392.053 54.6 385.92 56.7333 381.253 61C376.72 65.1333 374.453 70.5333 374.453 77.2V84H424.853Z" fill="#5E676B"/>
    <path d="M497.541 55.6C490.074 55.6 483.874 57.8666 478.941 62.4C474.007 66.8 471.541 72.2 471.541 78.6V131C471.541 135.4 470.074 138.667 467.141 140.8C464.341 142.8 460.007 143.8 454.141 143.8V55C454.141 45.1333 459.741 40.2 470.941 40.2V52.4C468.807 54.6666 467.341 56.6666 466.541 58.4L467.341 59.2C475.874 46.5333 486.541 40.2 499.341 40.2C504.141 40.2 507.807 41.4 510.341 43.8C512.874 46.0666 514.141 48.8666 514.141 52.2C514.141 54.6 513.541 56.7333 512.341 58.6C508.607 56.6 503.674 55.6 497.541 55.6Z" fill="#5E676B"/>
    <path d="M120.028 11.102C119.848 11.39 119.656 11.606 119.452 11.75C119.26 11.894 119.008 11.966 118.696 11.966C118.42 11.966 118.12 11.882 117.796 11.714C117.484 11.534 117.124 11.336 116.716 11.12C116.32 10.904 115.864 10.712 115.348 10.544C114.832 10.364 114.244 10.274 113.584 10.274C112.444 10.274 111.592 10.52 111.028 11.012C110.476 11.492 110.2 12.146 110.2 12.974C110.2 13.502 110.368 13.94 110.704 14.288C111.04 14.636 111.478 14.936 112.018 15.188C112.57 15.44 113.194 15.674 113.89 15.89C114.598 16.094 115.318 16.328 116.05 16.592C116.782 16.844 117.496 17.144 118.192 17.492C118.9 17.84 119.524 18.284 120.064 18.824C120.616 19.364 121.06 20.024 121.396 20.804C121.732 21.572 121.9 22.502 121.9 23.594C121.9 24.806 121.69 25.94 121.27 26.996C120.85 28.052 120.238 28.976 119.434 29.768C118.642 30.548 117.658 31.166 116.482 31.622C115.318 32.066 113.992 32.288 112.504 32.288C111.688 32.288 110.854 32.204 110.002 32.036C109.162 31.868 108.346 31.634 107.554 31.334C106.762 31.022 106.018 30.656 105.322 30.236C104.626 29.816 104.02 29.348 103.504 28.832L105.304 25.988C105.448 25.784 105.634 25.616 105.862 25.484C106.102 25.34 106.36 25.268 106.636 25.268C106.996 25.268 107.356 25.382 107.716 25.61C108.088 25.838 108.502 26.09 108.958 26.366C109.426 26.642 109.96 26.894 110.56 27.122C111.16 27.35 111.868 27.464 112.684 27.464C113.788 27.464 114.646 27.224 115.258 26.744C115.87 26.252 116.176 25.478 116.176 24.422C116.176 23.81 116.008 23.312 115.672 22.928C115.336 22.544 114.892 22.226 114.34 21.974C113.8 21.722 113.182 21.5 112.486 21.308C111.79 21.116 111.076 20.906 110.344 20.678C109.612 20.438 108.898 20.15 108.202 19.814C107.506 19.466 106.882 19.016 106.33 18.464C105.79 17.9 105.352 17.204 105.016 16.376C104.68 15.536 104.512 14.504 104.512 13.28C104.512 12.296 104.71 11.336 105.106 10.4C105.502 9.46396 106.084 8.62996 106.852 7.89796C107.62 7.16596 108.562 6.58396 109.678 6.15196C110.794 5.70796 112.072 5.48596 113.512 5.48596C114.316 5.48596 115.096 5.55196 115.852 5.68396C116.62 5.80396 117.346 5.98996 118.03 6.24196C118.714 6.48196 119.35 6.77596 119.938 7.12396C120.538 7.45996 121.072 7.84396 121.54 8.27596L120.028 11.102Z" fill="#5E676B"/>
    <path d="M162.156 5.77396V32H156.792V16.916C156.792 16.568 156.798 16.19 156.81 15.782C156.834 15.374 156.87 14.96 156.918 14.54L149.952 28.022C149.736 28.442 149.442 28.76 149.07 28.976C148.71 29.192 148.296 29.3 147.828 29.3H147C146.532 29.3 146.112 29.192 145.74 28.976C145.38 28.76 145.092 28.442 144.876 28.022L137.91 14.504C137.946 14.936 137.976 15.362 138 15.782C138.024 16.19 138.036 16.568 138.036 16.916V32H132.672V5.77396H137.316C137.58 5.77396 137.808 5.77996 138 5.79196C138.204 5.80396 138.384 5.83996 138.54 5.89996C138.696 5.95996 138.834 6.05596 138.954 6.18796C139.086 6.30796 139.212 6.48196 139.332 6.70996L146.082 20.012C146.322 20.468 146.55 20.942 146.766 21.434C146.994 21.926 147.21 22.43 147.414 22.946C147.618 22.418 147.828 21.902 148.044 21.398C148.272 20.894 148.512 20.414 148.764 19.958L155.496 6.70996C155.616 6.48196 155.736 6.30796 155.856 6.18796C155.988 6.05596 156.132 5.95996 156.288 5.89996C156.444 5.83996 156.618 5.80396 156.81 5.79196C157.014 5.77996 157.248 5.77396 157.512 5.77396H162.156Z" fill="#5E676B"/>
    <path d="M188.29 21.974L185.86 14.792C185.68 14.336 185.488 13.802 185.284 13.19C185.08 12.566 184.876 11.894 184.672 11.174C184.492 11.906 184.3 12.584 184.096 13.208C183.892 13.832 183.7 14.372 183.52 14.828L181.108 21.974H188.29ZM197.956 32H193.24C192.712 32 192.286 31.88 191.962 31.64C191.638 31.388 191.392 31.07 191.224 30.686L189.676 26.114H179.704L178.156 30.686C178.024 31.022 177.784 31.328 177.436 31.604C177.1 31.868 176.68 32 176.176 32H171.424L181.576 5.77396H187.804L197.956 32Z" fill="#5E676B"/>
    <path d="M215.756 18.104C216.584 18.104 217.286 18.002 217.862 17.798C218.45 17.582 218.93 17.288 219.302 16.916C219.674 16.544 219.944 16.112 220.112 15.62C220.28 15.116 220.364 14.576 220.364 14C220.364 12.848 219.986 11.948 219.23 11.3C218.486 10.652 217.328 10.328 215.756 10.328H213.308V18.104H215.756ZM228.68 32H223.172C222.152 32 221.42 31.616 220.976 30.848L216.62 23.234C216.416 22.91 216.188 22.676 215.936 22.532C215.684 22.376 215.324 22.298 214.856 22.298H213.308V32H207.224V5.77396H215.756C217.652 5.77396 219.266 5.97196 220.598 6.36796C221.942 6.75196 223.034 7.29196 223.874 7.98796C224.726 8.68396 225.344 9.50596 225.728 10.454C226.112 11.402 226.304 12.434 226.304 13.55C226.304 14.402 226.19 15.206 225.962 15.962C225.734 16.718 225.398 17.42 224.954 18.068C224.51 18.704 223.958 19.274 223.298 19.778C222.65 20.282 221.9 20.696 221.048 21.02C221.444 21.224 221.816 21.482 222.164 21.794C222.512 22.094 222.824 22.454 223.1 22.874L228.68 32Z" fill="#5E676B"/>
    <path d="M256.403 10.598H249.023V32H242.939V10.598H235.559V5.77396H256.403V10.598Z" fill="#5E676B"/>
    <path d="M479.347 139.136C479.347 139.004 479.37 138.882 479.418 138.768C479.469 138.654 479.537 138.555 479.622 138.471C479.71 138.387 479.812 138.321 479.929 138.273C480.047 138.222 480.175 138.196 480.314 138.196C480.45 138.196 480.577 138.222 480.694 138.273C480.811 138.321 480.914 138.387 481.002 138.471C481.09 138.555 481.158 138.654 481.205 138.768C481.257 138.882 481.282 139.004 481.282 139.136C481.282 139.268 481.257 139.393 481.205 139.51C481.158 139.624 481.09 139.723 481.002 139.807C480.914 139.892 480.811 139.958 480.694 140.005C480.577 140.053 480.45 140.077 480.314 140.077C480.175 140.077 480.047 140.053 479.929 140.005C479.812 139.958 479.71 139.892 479.622 139.807C479.537 139.723 479.469 139.624 479.418 139.51C479.37 139.393 479.347 139.268 479.347 139.136Z" fill="#5E676B"/>
    <path d="M484.503 134.296V140H482.798V134.296H484.503ZM484.679 132.734C484.679 132.87 484.651 132.998 484.596 133.119C484.541 133.237 484.466 133.341 484.371 133.433C484.275 133.521 484.164 133.592 484.035 133.647C483.911 133.699 483.777 133.724 483.634 133.724C483.494 133.724 483.364 133.699 483.243 133.647C483.122 133.592 483.014 133.521 482.919 133.433C482.827 133.341 482.754 133.237 482.699 133.119C482.648 132.998 482.622 132.87 482.622 132.734C482.622 132.595 482.648 132.465 482.699 132.344C482.754 132.223 482.827 132.117 482.919 132.025C483.014 131.933 483.122 131.862 483.243 131.81C483.364 131.759 483.494 131.733 483.634 131.733C483.777 131.733 483.911 131.759 484.035 131.81C484.164 131.862 484.275 131.933 484.371 132.025C484.466 132.117 484.541 132.223 484.596 132.344C484.651 132.465 484.679 132.595 484.679 132.734Z" fill="#5E676B"/>
    <path d="M487.815 134.912C487.925 134.81 488.039 134.714 488.156 134.626C488.273 134.538 488.398 134.465 488.53 134.406C488.666 134.344 488.81 134.296 488.964 134.263C489.122 134.227 489.293 134.208 489.476 134.208C489.788 134.208 490.063 134.263 490.301 134.373C490.543 134.48 490.746 134.63 490.911 134.824C491.076 135.015 491.201 135.244 491.285 135.512C491.37 135.776 491.412 136.064 491.412 136.375V140H489.707V136.375C489.707 136.097 489.643 135.88 489.514 135.726C489.386 135.569 489.197 135.49 488.948 135.49C488.761 135.49 488.585 135.53 488.42 135.611C488.259 135.688 488.101 135.794 487.947 135.93V140H486.242V134.296H487.298C487.511 134.296 487.65 134.392 487.716 134.582L487.815 134.912Z" fill="#5E676B"/>
    </svg>
  )
}

export default Logo
