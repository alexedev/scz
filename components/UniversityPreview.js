import Link from 'next/link'
import DeleteUniversity from './DeleteUniversity';

export default ({name, href, id}) => (
      
        <div className="preview">
          <Link prefetch href={href}>
            <a className="preview__name">{name}</a>
          </Link>
          <DeleteUniversity id={id} /> 
          <style jsx>{`
          .preview {
            border-radius: 4px;
            cursor: pointer;
            margin-bottom:15px;
            padding: 10px 0 10px 0;
            box-shadow: 1px 1px 2px 0 rgba(142, 142, 142, 0.50);
            text-align: center;
          }
          .preview:hover {
            box-shadow: 1px 1px 5px 0 rgba(142, 142, 142, 0.50);
          }
          .preview__name {
            font-size: 20px;
            letter-spacing: 0.8px;
            text-decoration: none;
            
          }
        `}</style>
        </div>
  
)