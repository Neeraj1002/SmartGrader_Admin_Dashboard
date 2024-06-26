// MUI Imports
import type { Theme } from '@mui/material/styles'

const colorSchemes = (): Theme['colorSchemes'] => {
  const skin = 'default' as string

  return {
    light: {
      palette: {
        primary: {
          main: '#339fcd',
          light: '#66b9e0',
          dark: '#267a9e',
          lighterOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.08)',
          lightOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.16)',
          mainOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.24)',
          darkOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.32)',
          darkerOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.38)'
        },
        secondary: {
          main: '#339fcd',
          light: '#66b9e0',
          dark: '#267a9e',
          contrastText: '#fff',
          lighterOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.08)',
          lightOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.16)',
          mainOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.24)',
          darkOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.32)',
          darkerOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.38)'
        },

        error: {
          main: '#FF4C51',
          light: '#FF7074',
          dark: '#E64449',
          contrastText: '#fff',
          lighterOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.08)',
          lightOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.16)',
          mainOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.24)',
          darkOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.32)',
          darkerOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.38)'
        },

        warning: {
          main: '#FFB400',
          light: '#FFC333',
          dark: '#E6A200',
          contrastText: '#fff',
          lighterOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.08)',
          lightOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.16)',
          mainOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.24)',
          darkOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.32)',
          darkerOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.38)'
        },

        info: {
          main: '#16B1FF',
          light: '#45C1FF',
          dark: '#149FE6',
          contrastText: '#fff',
          lighterOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.08)',
          lightOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.16)',
          mainOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.24)',
          darkOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.32)',
          darkerOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.38)'
        },

        success: {
          main: '#56CA00',
          light: '#78D533',
          dark: '#4DB600',
          contrastText: '#fff',
          lighterOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.08)',
          lightOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.16)',
          mainOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.24)',
          darkOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.32)',
          darkerOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.38)'
        },

        text: {
          primary: `rgb(var(--mui-mainColorChannels-light) / 0.9)`,
          secondary: `rgb(var(--mui-mainColorChannels-light) / 0.7)`,
          disabled: `rgb(var(--mui-mainColorChannels-light) / 0.4)`,
          primaryChannel: 'var(--mui-mainColorChannels-light)',
          secondaryChannel: 'var(--mui-mainColorChannels-light)'
        },

        divider: `rgb(var(--mui-mainColorChannels-light) / 0.12)`,
        dividerChannel: 'var(--mui-mainColorChannels-light)',
        background: {
          default: skin === 'bordered' ? '#FFFFFF' : '#F4F5FA',
          paper: '#FFFFFF'
        },

        action: {
          active: `rgb(var(--mui-mainColorChannels-light) / 0.6)`,
          hover: `rgb(var(--mui-mainColorChannels-light) / 0.04)`,
          selected: `rgb(var(--mui-mainColorChannels-light) / 0.08)`,
          disabled: `rgb(var(--mui-mainColorChannels-light) / 0.3)`,
          disabledBackground: `rgb(var(--mui-mainColorChannels-light) / 0.12)`,
          focus: `rgb(var(--mui-mainColorChannels-light) / 0.1)`,
          focusOpacity: 0.1,
          activeChannel: 'var(--mui-mainColorChannels-light)',
          selectedChannel: 'var(--mui-mainColorChannels-light)'
        },

        Alert: {
          errorColor: 'var(--mui-palette-error-main)',
          warningColor: 'var(--mui-palette-warning-main)',
          infoColor: 'var(--mui-palette-info-main)',
          successColor: 'var(--mui-palette-success-main)',
          errorStandardBg: 'var(--mui-palette-error-lightOpacity)',
          warningStandardBg: 'var(--mui-palette-warning-lightOpacity)',
          infoStandardBg: 'var(--mui-palette-info-lightOpacity)',
          successStandardBg: 'var(--mui-palette-success-lightOpacity)',
          errorFilledColor: 'var(--mui-palette-error-contrastText)',
          warningFilledColor: 'var(--mui-palette-warning-contrastText)',
          infoFilledColor: 'var(--mui-palette-info-contrastText)',
          successFilledColor: 'var(--mui-palette-success-contrastText)',
          errorFilledBg: 'var(--mui-palette-error-main)',
          warningFilledBg: 'var(--mui-palette-warning-main)',

          infoFilledBg: 'var(--mui-palette-info-main)',

          successFilledBg: 'var(--mui-palette-success-main)'
        },

        Avatar: {
          defaultBg: '#F0EFF0'
        },

        Chip: {
          defaultBorder: 'var(--mui-palette-divider)'
        },

        FilledInput: {
          bg: `rgb(var(--mui-mainColorChannels-light) / 0.06)`,

          hoverBg: `rgb(var(--mui-mainColorChannels-light) / 0.08)`,

          disabledBg: `rgb(var(--mui-mainColorChannels-light) / 0.06)`
        },

        LinearProgress: {
          primaryBg: 'var(--mui-palette-primary-mainOpacity)',

          secondaryBg: 'var(--mui-palette-secondary-mainOpacity)',

          errorBg: 'var(--mui-palette-error-mainOpacity)',

          warningBg: 'var(--mui-palette-warning-mainOpacity)',

          infoBg: 'var(--mui-palette-info-mainOpacity)',

          successBg: 'var(--mui-palette-success-mainOpacity)'
        },

        SnackbarContent: {
          bg: '#1A0E33',

          color: 'var(--mui-palette-background-paper)'
        },

        Switch: {
          defaultColor: 'var(--mui-palette-common-white)',

          defaultDisabledColor: 'var(--mui-palette-common-white)',

          primaryDisabledColor: 'var(--mui-palette-common-white)',

          secondaryDisabledColor: 'var(--mui-palette-common-white)',

          errorDisabledColor: 'var(--mui-palette-common-white)',

          warningDisabledColor: 'var(--mui-palette-common-white)',

          infoDisabledColor: 'var(--mui-palette-common-white)',

          successDisabledColor: 'var(--mui-palette-common-white)'
        },

        Tooltip: {
          bg: '#1A0E33'
        },

        TableCell: {
          border: 'var(--mui-palette-divider)'
        },

        customColors: {
          bodyBg: '#F4F5FA',

          chatBg: '#F7F6FA',

          greyLightBg: '#FAFAFA',

          inputBorder: `rgb(var(--mui-mainColorChannels-light) / 0.22)`,

          tableHeaderBg: '#F6F7FB',

          tooltipText: '#FFFFFF',

          trackBg: '#F0F2F8'
        }
      }
    }
  } as Theme['colorSchemes']
}

export default colorSchemes
