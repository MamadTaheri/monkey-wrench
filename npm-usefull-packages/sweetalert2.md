### Link

`https://www.npmjs.com/package/sweetalert2`

### install

- with npm

  `npm i sweetalert2`

## Search page

[sweetalert2.github.io/](https://sweetalert2.github.io/)

## examples

    import Swal from 'sweetalert2';

      useEffect(() => {
        Swal.fire({
          icon: 'info',
          title: 'اطلاعیه',
          confirmButtonText: 'متوجه شدم',
          text: 'متن پایین.',
          footer: '<a class="btn btn-outline-primary" href="https://www.linkedin.com/in/mohammad-taheri1/">تماس با من</a>'
        })
        
      }, [])
