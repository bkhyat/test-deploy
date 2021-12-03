// import Row from "antd/es/descriptions/Row";
import {Row, Col, Layout, Button, Menu, Switch, Space, Card} from "antd";
import 'antd/dist/antd.less';
import SplitPane from 'react-split-pane';
import {CloseOutlined} from "@ant-design/icons";
import './App.css'

const {Header, Content, Sider, Footer}= Layout;

const Main = props =>{

    return(
        <Layout style={{height: '100vh'}}>
            <Header>
                {/*<div className={'logo'}>Logo</div>*/}
                <Menu mode={'horizontal'} theme={'dark'}>
                    <Menu.Item
                        key={'1'}
                        >Home</Menu.Item>
                    <Menu.Item
                        key={'2'}
                        >Detail</Menu.Item>
                    <Menu.Item
                        key={'3'}
                        >Service</Menu.Item>
                    <Menu.Item
                        key={'4'}
                        >Contacts</Menu.Item>
                    <Menu.Item
                        key={'5'}
                        >About</Menu.Item>
                    <Menu.Item
                        key={'6'}
                        >Help</Menu.Item>
                    <Menu.Item
                        key={'7'}
                        >Service</Menu.Item>
                </Menu>
                <div>The header area</div>
            </Header>
            <Layout>
                <Sider>
                    <Menu mode={'vertical'} theme={'dark'}>
                    <Menu.Item
                        key={'1'}
                        >Home<Button icon={<CloseOutlined />}>

                    </Button></Menu.Item>
                    <Menu.Item
                        key={'2'}
                        >Detail</Menu.Item>
                    <Menu.Item
                        key={'3'}
                        >Service</Menu.Item>
                    <Menu.Item
                        key={'4'}
                        >Contacts</Menu.Item>
                    <Menu.Item
                        key={'5'}
                        >About</Menu.Item>
                    <Menu.Item
                        key={'6'}
                        >Help</Menu.Item>
                    <Menu.Item
                        key={'7'}
                        >Service</Menu.Item>
                </Menu>
                </Sider>
                <Content>
                    <SplitPane>
                        <Card title={'Components'}
                              style={{padding: 10, margin:10}}>
                        <div className={'sidebar'}>
                            <Space direction={'vertical'}>

                            <Switch defaultChecked />
                          <br />
                            <Space>
                              <Button type="primary">
                                Primary Button
                          </Button>
                                <Button type={'default'}>
                                    Default Button
                                </Button>
                                <Button type={'default'} className={'sample'}>
                                    Ghost Button
                                </Button>
                            </Space>

                            </Space>
                        </div>
                        </Card>
                        <div>
                            <Card
                                title={'Card Heading'}
                                className={'sample-card'}
                            >
                                Card Content
                            </Card>
                        </div>


                    </SplitPane>
                </Content>

                {/*</SplitPane>*/}
            </Layout>
            <Footer>
                The footer text
            </Footer>
        </Layout>
    )
}
export default Main