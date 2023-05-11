import { useCSVReader } from 'react-papaparse'
import { UploadedResult } from './CSVReader.types'

const styles = {
    csvReader: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
    },
    browseFile: {
        width: '20%',
    },
    acceptedFile: {
        border: '1px solid #ccc',
        height: 45,
        lineHeight: 2.5,
        paddingLeft: 10,
        width: '80%',
    },
    remove: {
        borderRadius: 0,
        padding: '0 20px',
    },
    progressBarBackgroundColor: {
        backgroundColor: 'red',
    },
}

const CSVReader = () => {
    const { CSVReader } = useCSVReader()
    const handleUploadAccepted = ({ data }: UploadedResult) => {
        console.log(data)
    }

    return (
        <CSVReader
            onUploadAccepted={handleUploadAccepted}
        >
            {({
                  getRootProps,
                  acceptedFile,
                  ProgressBar,
                  getRemoveFileProps,
              }: any) => (
                <>
                    <div>
                        <button type='button' {...getRootProps()} style={styles.browseFile}>
                            Загрузить файл
                        </button>
                        <div style={styles.acceptedFile}>
                            {acceptedFile && acceptedFile.name}
                        </div>
                        <button {...getRemoveFileProps()} style={styles.remove}>
                            Удалить
                        </button>
                    </div>
                    <ProgressBar style={styles.progressBarBackgroundColor} />
                </>
            )
            }
        </CSVReader>
    )
}

CSVReader.displayName = 'CSVReader'
export default CSVReader
