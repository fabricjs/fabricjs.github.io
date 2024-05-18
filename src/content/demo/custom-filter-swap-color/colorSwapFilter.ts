import { filters, Color, type T2DPipelineState } from 'fabric';

/**
 * Fragment source for the SwapColor program
 */
const fragmentSource = `
 precision highp float;
 uniform sampler2D uTexture;
 uniform vec4 colorSource;
 uniform vec4 colorDestination;
 varying vec2 vTexCoord;
 void main() {
   vec4 color = texture2D(uTexture, vTexCoord);
   vec3 delta = abs(colorSource.rgb - color.rgb);
   gl_FragColor = length(delta) < 0.02 ? colorDestination.rgba : color;
 }`;

/**
 * SwapColor filter class
 * @class fabric.Image.filters.SwapColor
 * @memberOf fabric.Image.filters
 * @extends fabric.Image.filters.BaseFilter
 * @see {@link fabric.Image.filters.SwapColor#initialize} for constructor definition
 * @example
 * var filter = new fabric.Image.filters.SwapColor({
 *   colorSource: 'orange',
 *   colorDestination: 'rgb(232, 12, 11)',
 * });
 * object.filters.push(filter);
 * object.applyFilters();
 */
export class SwapColor extends filters.BaseFilter {

  /**
   * Filter type
   * @param {String} type
   * @default
   */
  static type = 'SwapColor';

  /**
   * SwapColor colorSource, a css color
   * @param {String} colorSource
   * @default
   */
  colorSource = 'rgb(255, 0, 0)';
    
  /**
   * SwapColor colorSource, a css color
   * @param {String} colorDestination
   * @default
   */
  colorDestination = 'rgb(0, 255, 0)';
 
  protected getFragmentSource(): string {
    return fragmentSource;
  }

  /**
   * Apply the SwapColor operation to a Uint8ClampedArray representing the pixels of an image.
   *
   * @param {Object} options
   * @param {ImageData} options.imageData The Uint8ClampedArray to be filtered.
   */
  applyTo2d({ imageData: { data } }: T2DPipelineState) {
    const source = new Color(this.colorSource).getSource(),
      destination = new Color(this.colorDestination).getSource();
    for (let i = 0; i < data.length; i += 4) {
        if (data[i] === source[0] && data[i + 1] === source[1] && data[i + 2] === source[2]) {
            data[i] = destination[0];
            data[i + 1] = destination[1];
            data[i + 2] = destination[2];
        }
    }
  }
  
  /**
   * Return WebGL uniform locations for this filter's shader.
   *
   * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
   * @param {WebGLShaderProgram} program This filter's compiled shader program.
   */
  getUniformLocations(gl, program) {
    return {
      uColorSource: gl.getUniformLocation(program, 'colorSource'),
      uColorDestination: gl.getUniformLocation(program, 'colorDestination'),
    };
  }
  
  /**
   * Send data from this filter to its shader program's uniforms.
   *
   * @param {WebGLRenderingContext} gl The GL canvas context used to compile this filter's shader.
   * @param {Object} uniformLocations A map of string uniform names to WebGLUniformLocation objects
   */
  sendUniformData(gl, uniformLocations) {
    var source = new Color(this.colorSource).getSource(),
        destination = new Color(this.colorDestination).getSource();
    source[0] /= 255;
    source[1] /= 255;
    source[2] /= 255;
    destination[0] /= 255;
    destination[1] /= 255;
    destination[2] /= 255;
    gl.uniform4fv(uniformLocations.uColorSource, source);
    gl.uniform4fv(uniformLocations.uColorDestination, destination);
  }

  isNeutralState(): boolean {
    return this.colorSource === this.colorDestination;
  }
  
  /**
   * Returns object representation of an instance
   * @return {Object} Object representation of an instance
   */
  toObject() {
    const data = super.toObject();
    return { ...data, colorSource: this.colorSource, colorDestination: this.colorDestination };
  }
}